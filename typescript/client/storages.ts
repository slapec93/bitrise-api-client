
import { CookieStorage as CookieStore } from 'cookie-storage';

export class CookieStorage implements TokenStorage {
    private fieldName: string;
    private store: CookieStore;

    constructor(fieldName: string) {
        this.store = new CookieStore();
        this.fieldName = fieldName;
    }

    getToken() {
        return this.store.getItem(this.fieldName);
    }

    storeToken(token: string) {
        this.store.setItem(this.fieldName, token);
    }
}

export class ConstantStorage implements TokenStorage {
    private token: string | null = null;

    constructor(token :string) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }

    storeToken(token: string) {
        this.token = token || this.token;
    }
}
