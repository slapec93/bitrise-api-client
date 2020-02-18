
import fetchIntercept from 'fetch-intercept';
import { includeField } from './util'

export class AuthTokenInterceptor implements Interceptor {
    private tokenStorage: TokenStorage;
    private domain: string;
    private requestConfig: Array<any> = [];

    constructor(domain: string, tokenStorage: TokenStorage) {
        this.domain = domain;
        this.tokenStorage = tokenStorage;
    }

    async request(url: string, config: RequestInit): Promise<any[]> {
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


    async responseError(err: Error): Promise<Response> {
        this.tokenStorage.storeToken(null);

        if (false) {
            //
            throw err;
        }

        return this.replayRequest();
    }

    private async replayRequest(): Promise<Response> {
        const [url, config] = this.requestConfig;
        this.requestConfig = [];

        return fetch(url, config);
    }

    private async fetchApiToken(authUrl: string): Promise<string> {
        const tokenResponse = await fetch(authUrl, {
            credentials: 'include',
            body: JSON.stringify({
                description: `API client - generated at ${Date.now()}`,
                expire_in_seconds: null,
                registration_type: 'login'
            })
        });

        return (await tokenResponse.json()).token;
    }
}

export class CSRFTokenInterceptor implements Interceptor {
    private tokenStorage: TokenStorage;

    constructor(tokenStorage: TokenStorage) {
        this.tokenStorage = tokenStorage;
    }

    async request(url: string, config: RequestInit): Promise<any[]> {
        const token = this.tokenStorage.getToken();

        if (token) {
            config.headers = includeField(config.headers, { 'X-CSRF-TOKEN': token });
        }

        return [url, config];
    }

    responseError(_: Error) {
        // no-op
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
        this.registrations = this.interceptors.map(interceptor => fetchIntercept.register(interceptor));
    }

    unregister() {
        this.registrations.forEach(unregister => unregister());
        this.registrations = [];
    }
}
