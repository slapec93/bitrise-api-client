import fetchIntercept, { FetchInterceptor } from 'fetch-intercept';

export interface Interceptor {
    request?(url: string, config: RequestInit): Promise<[string, RequestInit]>;
    response?(response: Response): Promise<Response>;
};

export interface InterceptorRegistrar {
    register(): void;
    unregister(): void;
};

export class InterceptorChain implements InterceptorRegistrar {
    private interceptors: Array<Interceptor> = [];
    private registrations: Array<Function> = [];

    private constructor(interceptors: Array<Interceptor>) {
        this.interceptors = interceptors;
    }

    static of(...interceptors: Array<Interceptor>): InterceptorChain {
        return new InterceptorChain(interceptors);
    }

    register = () => {
        this.registrations = this.interceptors
            .map(interceptor => fetchIntercept.register(<FetchInterceptor>interceptor));
    };

    unregister = () => {
        this.registrations.forEach(unregister => unregister());
        this.registrations = [];
    };
}