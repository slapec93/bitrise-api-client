import fetchIntercept, { FetchInterceptor } from 'fetch-intercept';
import { TokenStorage } from './storage';
import { includeField } from './util'

export type AuthenticationOptions = {
    tokenExpiration?: number;
    authDomain?: string
};

export interface Interceptor {
    request?(url: string, config: RequestInit): Promise<[string, RequestInit]>;
    response?(response: Response): Promise<Response>;
}

export interface InterceptorRegistrar {
    register(): void;
    unregister(): void;
};

const DEFAULT_AUTH_DOMAIN = 'https://app.bitrise.io';

export const CSRF_HEADER = 'x-csrf-token';

export const TOKEN_HEADER = 'Authorization';

export class AuthTokenInterceptor implements Interceptor {
    private tokenStorage: TokenStorage;
    private domain: string;
    private replayed: boolean = false;
    private tokenExpiration: number = 7200; // 2 hours
    private requestConfig: [string, RequestInit] = ["", {}];

    constructor(tokenStorage: TokenStorage, options?: AuthenticationOptions) {
        this.domain = options?.authDomain || DEFAULT_AUTH_DOMAIN;
        this.tokenStorage = tokenStorage;

        if (options?.tokenExpiration) {
            this.tokenExpiration = options?.tokenExpiration;
        }
    }

    request = async (url: string, config: RequestInit): Promise<[string, RequestInit]> => {
        const authUrl = this.domain + '/me/profile/security/user_auth_tokens';

        if (url === authUrl) {
            // do not intercept itself :)
            return [url, config];
        }

        let authToken = this.tokenStorage.getAuthToken();

        if (!authToken) {
            authToken = await this.fetchApiToken(authUrl);
            this.tokenStorage.storeAuthToken(authToken);
        }

        config.headers = includeField(config.headers, { [TOKEN_HEADER]: `token ${authToken}` });
        this.requestConfig = [url, config];

        return this.requestConfig;
    }

    response = async (response: Response): Promise<Response> => {
        if (!this.replayed && response.status === 401) {
            this.tokenStorage.storeAuthToken(null);
            this.replayed = true;
            return this.replayRequest();
        }

        return response;
    }

    private replayRequest = async (): Promise<Response> => {
        const [url, config] = this.requestConfig;
        this.requestConfig = ["", {}];

        return fetch(url, config);
    }

    private fetchApiToken = async (authUrl: string): Promise<string> => {
        const tokenResponse = await fetch(authUrl, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                description: `API client - token request`,
                expire_in_seconds: this.tokenExpiration,
                registration_type: 'login'
            })
        });

        if (!tokenResponse.ok) {
            throw new Error('Authentication request failed');
        }

        return (await tokenResponse.json()).token;
    }
}

export class CSRFTokenInterceptor implements Interceptor {
    private tokenStorage: TokenStorage;

    constructor(tokenStorage: TokenStorage) {
        this.tokenStorage = tokenStorage;
    }

    request = async (url: string, config: RequestInit): Promise<[string, RequestInit]> => {
        const csrfToken = this.tokenStorage.getCSRFToken();

        if (csrfToken) {
            config.headers = includeField(config.headers, { [CSRF_HEADER]: csrfToken })
        }

        return [url, config];
    }
}

export class InterceptorChain implements InterceptorRegistrar {
    private interceptors: Array<Interceptor> = [];
    private registrations: Array<Function> = [];

    private constructor(interceptors: Array<Interceptor>) {
        this.interceptors = interceptors;
    }

    static of(...interceptors: Array<Interceptor>): InterceptorChain {
        return new InterceptorChain(interceptors);
    }

    register() {
        this.registrations = this.interceptors
            .map(interceptor => fetchIntercept.register(<FetchInterceptor>interceptor));
    }

    unregister() {
        this.registrations.forEach(unregister => unregister());
        this.registrations = [];
    }
}
