import fetchIntercept, { FetchInterceptor } from 'fetch-intercept';
import { includeField } from './util'

export class AuthTokenInterceptor implements FetchInterceptor {
    private tokenStorage: TokenStorage;
    private domain: string;
    private tokenExpiration: number = 7200; // 2 hours
    private requestConfig: [string, RequestInit] = ["", {}];

    constructor({ domain, tokenExpiration }: AuthenticationOptions, tokenStorage: TokenStorage) {
        this.domain = domain;
        this.tokenStorage = tokenStorage;

        if (tokenExpiration) {
            this.tokenExpiration = tokenExpiration;
        }
    }

    request = async (url: string, config: RequestInit): Promise<[string, RequestInit]> => {
        const authUrl = this.domain + '/me/profile/security/user_auth_tokens';

        if (url === authUrl) {
            return [url, config];
        }

        let token = this.tokenStorage.getToken();

        if (!token) {
            token = await this.fetchApiToken(authUrl);
            this.tokenStorage.storeToken(token);
        }

        config.headers = includeField(config.headers, { 'Authorization': `token ${token}` });
        this.requestConfig = [url, config];

        return this.requestConfig;
    }

    responseError = async (err: Error): Promise<Response> => {
        this.tokenStorage.storeToken(null);

        if (false) {
            //
            throw err;
        }

        return this.replayRequest();
    }

    private replayRequest = async (): Promise<Response> => {
        const [url, config] = this.requestConfig;
        this.requestConfig = ["", {}];

        return fetch(url, config);
    }

    private fetchApiToken = async (authUrl: string): Promise<string> => {
        const tokenResponse = await fetch(authUrl, {
            credentials: 'include',
            body: JSON.stringify({
                description: `API client - token request at ${Date.now()}`,
                expire_in_seconds: this.tokenExpiration,
                registration_type: 'login'
            })
        });

        return (await tokenResponse.json()).token;
    }
}

export class CSRFTokenInterceptor implements FetchInterceptor {
    private tokenStorage: TokenStorage;

    constructor(tokenStorage: TokenStorage) {
        this.tokenStorage = tokenStorage;
    }

    request = async (url: string, config: RequestInit): Promise<[string, RequestInit]> => {
        const token = this.tokenStorage.getToken();

        if (token) {
            config.headers = includeField(config.headers, { 'X-CSRF-TOKEN': token });
        }

        return [url, config];
    }

    responseError = (err: Error): Promise<any> => {
        return Promise.reject(err);
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
