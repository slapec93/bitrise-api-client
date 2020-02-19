import 'cross-fetch/polyfill';
import BitriseAPI from './client/api';
import { AuthTokenInterceptor, CSRFTokenInterceptor, InterceptorChain } from './client/auth-interceptors';
import { CookieTokenStorage, ConstantTokenStorage, TokenStorage } from './client/storage';

const createStorage = (token?: string | null): TokenStorage => {
    if (token) {
        return new ConstantTokenStorage(token);
    }

    return new CookieTokenStorage({
        CSRFTokenName: 'CSRF-TOKEN',
        authTokenName: 'expiring_api_token'
    });
};

export default (apiToken?: string | undefined): BitriseAPI => {
    const tokenStore = createStorage(apiToken);

    const authTokenInterceptor = new AuthTokenInterceptor(tokenStore);
    const csrftokenInterceptor = new CSRFTokenInterceptor(tokenStore);

    return new BitriseAPI(
        InterceptorChain.of(authTokenInterceptor, csrftokenInterceptor)
    );
};
