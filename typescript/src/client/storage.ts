
import { CookieStorage as CookieStore } from 'cookie-storage';

export interface TokenStorage {
    getToken(): string|null;
    storeToken(token: string|null): void;
}

export class CookieStorage implements TokenStorage {
    private fieldName: string;
    private expirationSec: number = 3600; // expires in an hour
    private store: CookieStore;

    constructor(fieldName: string, expirationSec?: number) {
        this.store = new CookieStore({
            secure: location.protocol === 'https:',
            domain: 'bitrise.io'
        });

        this.fieldName = fieldName;

        if (expirationSec) {
            this.expirationSec = expirationSec;
        }
    }

    getToken = (): string|null => {
        return this.store.getItem(this.fieldName);
    }

    storeToken = (token: string) => {
        const expires = new Date(Date.now() + this.expirationSec * 1000);
        this.store.setItem(this.fieldName, token, { expires });
    }
}

export class ConstantStorage implements TokenStorage {
    private token: string|null = null;

    constructor(token :string) {
        this.token = token;
    }

    getToken = (): string|null => {
        return this.token;
    }

    storeToken = (token: string) => {
        this.token = token || this.token;
    }
}
