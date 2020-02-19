import 'isomorphic-fetch';

import BitriseAPI, { PUBLIC_DOMAIN } from './client/api';
import { AuthTokenInterceptor, CSRFTokenInterceptor, InterceptorChain } from './client/auth-interceptors';
import { CookieStorage, ConstantStorage } from './client/storage';

const createStorage = (field_name: string, token?: string | null): TokenStorage => {
    if (token) {
        return new ConstantStorage(token);
    }

    return new CookieStorage(field_name);
};

export default (apiToken?: string | undefined): BitriseAPI => {
    const apiTokenStore = createStorage("expiring_api_token", apiToken);
    const csrfTokenStore = createStorage("CSRF-TOKEN");

    const authTokenInterceptor = new AuthTokenInterceptor({ domain: PUBLIC_DOMAIN }, apiTokenStore);
    const csrftokenInterceptor = new CSRFTokenInterceptor(csrfTokenStore);

    return new BitriseAPI(
        InterceptorChain.of(authTokenInterceptor, csrftokenInterceptor)
    );
};
