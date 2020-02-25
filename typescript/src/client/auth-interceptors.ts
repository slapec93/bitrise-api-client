import { Interceptor } from './interceptor-chain';
import { TokenStorage } from './storage';
import { includeField } from './util';

export type AuthFailureCallback = (
  errorResponse: Response | Error,
) => Promise<void>;

export type AuthenticationOptions = {
  tokenExpiration?: number;
  authDomain?: string;
  authFailureCallback?: AuthFailureCallback;
};

const DEFAULT_AUTH_DOMAIN = 'https://app.bitrise.io';

export const CSRF_HEADER = 'x-csrf-token';

export const TOKEN_HEADER = 'Authorization';

export class AuthTokenInterceptor implements Interceptor {
  private tokenStorage: TokenStorage;
  private domain: string;
  private forbiddenHTTPStatuses: Array<number> = [401, 403];
  private authFailureCallback: AuthFailureCallback = () => Promise.resolve();
  private replayed = false;
  private tokenExpiration = 7200; // 2 hours
  private requestConfig: [string, RequestInit] = ['', {}];

  constructor(tokenStorage: TokenStorage, options?: AuthenticationOptions) {
    this.domain = options?.authDomain || DEFAULT_AUTH_DOMAIN;
    this.tokenStorage = tokenStorage;

    if (options?.tokenExpiration) {
      this.tokenExpiration = options.tokenExpiration;
    }

    if (options?.authFailureCallback) {
      this.authFailureCallback = options.authFailureCallback;
    }
  }

  request = async (
    url: string,
    config: RequestInit,
  ): Promise<[string, RequestInit]> => {
    const authUrl = this.domain + '/me/profile/security/user_auth_tokens';

    if (url === authUrl) {
      // do not intercept itself :)
      return [url, config];
    }

    const authToken = await this.upsertAuthToken(authUrl);

    if (authToken) {
      config.headers = includeField(config.headers, {
        [TOKEN_HEADER]: `token ${authToken}`,
      });
    }

    // store config for later use
    this.requestConfig = [url, config];

    return this.requestConfig;
  };

  response = async (response: Response): Promise<Response> => {
    if (
      !this.replayed &&
      this.forbiddenHTTPStatuses.includes(response.status)
    ) {
      this.tokenStorage.storeAuthToken(null);
      this.replayed = true;
      return this.replayRequest();
    }

    return response;
  };

  private replayRequest = async (): Promise<Response> => {
    const [url, config] = this.requestConfig;
    this.requestConfig = ['', {}];

    return fetch(url, config);
  };

  private upsertAuthToken = async (authUrl: string): Promise<string | null> => {
    let authToken = this.tokenStorage.getAuthToken();

    if (!authToken) {
      authToken = await this.fetchApiToken(authUrl);
      this.tokenStorage.storeAuthToken(authToken);
    }

    return authToken;
  };

  private fetchApiToken = async (authUrl: string): Promise<string | null> => {
    let token = null;

    try {
      const tokenResponse = await fetch(authUrl, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          description: 'API client - token request',
          'expire_in_seconds': this.tokenExpiration,
          'registration_type': 'login',
        }),
      });

      if (tokenResponse.ok) {
        token = (await tokenResponse.json()).token;
      } else {
        await this.authFailureCallback(tokenResponse);
      }
    } catch (err) {
      await this.authFailureCallback(err);
    }

    return token;
  };
}

export class CSRFTokenInterceptor implements Interceptor {
  private tokenStorage: TokenStorage;

  constructor(tokenStorage: TokenStorage) {
    this.tokenStorage = tokenStorage;
  }

  request = async (
    url: string,
    config: RequestInit,
  ): Promise<[string, RequestInit]> => {
    const csrfToken = this.tokenStorage.getCSRFToken();

    if (csrfToken) {
      config.headers = includeField(config.headers, {
        [CSRF_HEADER]: csrfToken,
      });
    }

    return [url, config];
  };
}
