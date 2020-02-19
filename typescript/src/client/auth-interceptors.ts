import { TokenStorage } from './storage';
import fetchIntercept, { FetchInterceptor } from 'fetch-intercept';
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

const CSRF_HEADER = 'X-CSRF-TOKEN';

const TOKEN_HEADER = 'Authorization';

export class AuthTokenInterceptor implements Interceptor {
    private tokenStorage: TokenStorage;
    private domain: string;
    private replayed: boolean = false;
    private tokenExpiration: number = 7200; // 2 hours
    private requestConfig: [string, RequestInit] = ["", {}];

    constructor({ authDomain, tokenExpiration }: AuthenticationOptions, tokenStorage: TokenStorage) {
        this.domain = authDomain || DEFAULT_AUTH_DOMAIN;
        this.tokenStorage = tokenStorage;

        if (tokenExpiration) {
            this.tokenExpiration = tokenExpiration;
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
        const csrf = this.tokenStorage.getCSRFToken();
        const headers = CSRFTokenInterceptor.addHeader(<Headers>{}, csrf);

        const tokenResponse = await fetch(authUrl, {
            headers,
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                description: `API client - token request at ${Date.now()}`,
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
        const token = this.tokenStorage.getCSRFToken();
        config.headers = CSRFTokenInterceptor.addHeader(<Headers>config.headers, token);

        return [url, config];
    }

    static addHeader(headers: Headers, csrf: string|null): Headers {
        return csrf ? includeField(headers, { [CSRF_HEADER]: csrf }) : headers;
    }
}

export class InterceptorChain implements InterceptorRegistrar {
    private interceptors: Array<FetchInterceptor> = [];
    private registrations: Array<Function> = [];

    private constructor(interceptors: Array<FetchInterceptor>) {
        this.interceptors = interceptors;
    }

    static of(...interceptors: Array<FetchInterceptor>): InterceptorChain {
        return new InterceptorChain(interceptors);
    }

    register() {
        this.registrations = this.interceptors.map(interceptor => fetchIntercept.register(interceptor));
    }

    unregister() {
        this.registrations.forEach(unregister => unregister());
        this.registrations = [];
    }
}
