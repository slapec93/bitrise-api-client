import { CookieStorage } from 'cookie-storage';
import { dateFromNow } from './util';

export interface TokenStorage {
  getAuthToken(): string | null;
  getCSRFToken(): string | null;
  storeAuthToken(token: string | null): void;
}

export type StorageOption = {
  CSRFTokenName: string;
  authTokenName: string;
  cookieDomain?: string;
  expirationSec?: number;
};

export class CookieTokenStorage implements TokenStorage {
  private options: StorageOption;
  private expirationSec = 3600; // expires in an hour
  private store: CookieStorage;

  constructor(options: StorageOption) {
    this.store = new CookieStorage({
      secure: location.protocol === 'https:',
      domain: options.cookieDomain || 'bitrise.io',
    });

    this.options = options;
    this.expirationSec = this.options.expirationSec || 3600;
  }

  getAuthToken = (): string | null => this.getToken(this.options.authTokenName);

  getCSRFToken = (): string | null => this.getToken(this.options.CSRFTokenName);

  storeAuthToken = (token: string | null) => {
    if (!token) {
      return;
    }

    const expires = dateFromNow(this.expirationSec);
    this.store.setItem(this.options.authTokenName, token, { expires });
  };

  private getToken = (tokenName: string): string | null => {
    const token = this.store.getItem(tokenName);
    return token === 'null' ? null : token;
  };
}

export class ConstantTokenStorage implements TokenStorage {
  private authToken: string | null = null;

  constructor(authToken: string) {
    this.authToken = authToken;
  }

  getAuthToken = (): string | null => {
    return this.authToken;
  };

  getCSRFToken() {
    return null;
  }

  storeAuthToken = (token: string | null) => {
    this.authToken = token || this.authToken;
  };
}
