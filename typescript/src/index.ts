import 'cross-fetch/polyfill';
import BitriseAPI from './client/api';
import { InterceptorChain } from './client/interceptor-chain';
import { AuthTokenInterceptor, CSRFTokenInterceptor, AuthFailureCallback } from './client/auth-interceptors';
import { CookieTokenStorage, ConstantTokenStorage, TokenStorage } from './client/storage';
import { isNodePlatform } from './client/util';

export type ApiClientOptions = {
    apiToken?: string,
    authFailureCallback?: AuthFailureCallback
};

const createStorage = (token?: string|null): TokenStorage => {
    if (token) {
        return new ConstantTokenStorage(token);
    }

    if (isNodePlatform()) {
        throw new Error('You must specify the token in nodeJS environment');
    }

    return new CookieTokenStorage({
        CSRFTokenName: 'CSRF-TOKEN',
        authTokenName: 'expiring_api_token'
    });
};

export default ({ apiToken, authFailureCallback }: ApiClientOptions): BitriseAPI => {
    const tokenStore = createStorage(apiToken);

    const authTokenInterceptor = new AuthTokenInterceptor(tokenStore, { authFailureCallback });
    const csrftokenInterceptor = new CSRFTokenInterceptor(tokenStore);

    return new BitriseAPI(
        InterceptorChain.of(authTokenInterceptor, csrftokenInterceptor)
    );
};
