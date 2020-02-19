
import { CookieStorage as CookieStore } from 'cookie-storage';

export interface TokenStorage {
    getAuthToken(): string|null;
    getCSRFToken(): string|null;
    storeAuthToken(token: string|null): void;
}

export type StorageOption = {
    CSRFTokenName: string,
    authTokenName: string,
    cookieDomain?: string,
    expirationSec?: number,
};

export class CookieStorage implements TokenStorage {
    private options: StorageOption;
    private expirationSec: number = 3600; // expires in an hour
    private store: CookieStore;

    constructor(options: StorageOption) {
        this.store = new CookieStore({
            secure: location.protocol === 'https:',
            domain: options.cookieDomain || 'bitrise.io'
        });

        this.options = options;
    }

    getAuthToken = (): string|null => this.getToken(this.options.authTokenName);

    getCSRFToken = (): string|null => this.getToken(this.options.CSRFTokenName);

    storeAuthToken = (token: string) => {
        const expires = new Date(Date.now() + this.expirationSec * 1000);
        this.store.setItem(this.options.authTokenName, token, { expires });
    }

    private getToken = (tokenName: string): string|null => {
        const token = this.store.getItem(tokenName);
        return token === 'null' ? null : token;
    }
}

export class ConstantStorage implements TokenStorage {
    private token: string|null = null;

    constructor(authToken :string) {
        this.token = authToken;
    }

    getAuthToken = (): string|null => {
        return this.token;
    }

    getCSRFToken() {
        return null;
    }

    storeAuthToken = (token: string) => {
        this.token = token || this.token;
    }
}
