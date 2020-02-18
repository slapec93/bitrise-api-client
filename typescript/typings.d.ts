declare module 'whatwg-fetch';

interface InterceptorRegistrar {
    register();
    unregister();
}

interface Interceptor {
    request(url: string, config: RequestInit): Promise<Array<any>>;
    responseError(err: Error);
}

interface TokenStorage {
    getToken();
    storeToken(token: string | null);
}