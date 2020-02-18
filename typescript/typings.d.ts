interface InterceptorRegistrar {
    register();
    unregister();
}

interface TokenStorage {
    getToken();
    storeToken(token: string | null);
}

type AuthenticationOptions = {
    tokenExpiration?: number;
    domain: string
}