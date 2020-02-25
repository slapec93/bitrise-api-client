// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetchMock = require('jest-fetch-mock');

import {
  CSRFTokenInterceptor,
  CSRF_HEADER,
  AuthTokenInterceptor,
  TOKEN_HEADER,
  AuthFailureCallback,
} from './auth-interceptors';

const testToken = 'testToken';

const mockStorage = {
  getAuthToken: jest.fn(),
  getCSRFToken: jest.fn(),
  storeAuthToken: jest.fn(),
};

describe('AuthTokenInterceptor', () => {
  let mockAuthCallback: AuthFailureCallback;
  let authTokenInterceptor: AuthTokenInterceptor;

  beforeEach(() => {
    mockAuthCallback = jest.fn().mockImplementation(() => Promise.resolve());
    fetchMock.resetMocks();
    authTokenInterceptor = new AuthTokenInterceptor(mockStorage, {
      authFailureCallback: mockAuthCallback,
    });
  });

  beforeAll(() => fetchMock.enableMocks());
  afterAll(() => fetchMock.disableMocks());

  it('should intercept requests and get auth token if non specified', async () => {
    fetchMock.once(JSON.stringify({ token: testToken }));
    mockStorage.getAuthToken.mockImplementation(() => null);

    const mockConfig = {
      body: 'test-body',
      headers: { 'test-header': 'test' },
    };

    const [, config] = await authTokenInterceptor.request(
      'test-url',
      mockConfig,
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          description: 'API client - token request',
          'expire_in_seconds': 7200,
          'registration_type': 'login',
        }),
      }),
    );

    expect(config.headers).toEqual({
      'test-header': 'test',
      [TOKEN_HEADER]: `token ${testToken}`,
    });
  });

  it('should intercept requests but should not get token if specified', async () => {
    mockStorage.getAuthToken.mockImplementation(() => testToken);

    await authTokenInterceptor.request('test-url', {});

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('should include token in request and leave url untouched', async () => {
    mockStorage.getAuthToken.mockImplementation(() => testToken);

    const mockConfig = {
      body: 'test-body',
      headers: { 'test-header': 'test' },
    };

    const [url, config] = await authTokenInterceptor.request(
      'test-url',
      mockConfig,
    );

    expect(url).toEqual('test-url');
    expect(config.headers).toEqual({
      'test-header': 'test',
      [TOKEN_HEADER]: `token ${testToken}`,
    });
  });

  it('should replay failed reuqests only once', async () => {
    const mockResponse = {
      status: 401,
      text: () => Promise.resolve('prev-response'),
    } as Response;
    fetchMock.mockResponses('server-response');

    let response = await authTokenInterceptor.response(mockResponse);
    expect(await response.text()).toEqual('server-response');

    response = await authTokenInterceptor.response(mockResponse);
    expect(await response.text()).toEqual('prev-response');

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('should not insert token into response when authentication failed', async () => {
    fetchMock.mockRejectOnce(new Error('network error'));
    mockStorage.getAuthToken.mockImplementation(() => null);

    const mockConfig = {
      headers: { 'test-header': 'test' },
    };

    const [, config] = await authTokenInterceptor.request(
      'test-url',
      mockConfig,
    );

    expect(config.headers).toEqual(mockConfig.headers);
  });

  it('should call auth failure callback', async () => {
    const fetchError = new Error('network error');

    fetchMock.mockRejectOnce(fetchError);
    mockStorage.getAuthToken.mockImplementation(() => null);

    await authTokenInterceptor.request('test-url', {});

    expect(mockAuthCallback).toHaveBeenCalledWith(fetchError);
  });
});

describe('CSRFTokenInterceptor', () => {
  let csrfInterceptor: CSRFTokenInterceptor;

  beforeEach(() => {
    csrfInterceptor = new CSRFTokenInterceptor(mockStorage);
  });

  it('should insert CSRF token in request if present', async () => {
    mockStorage.getCSRFToken.mockImplementation(() => testToken);

    const mockConfig = {
      body: 'test-body',
      headers: { 'test-header': 'test' },
    };

    const [url, config] = await csrfInterceptor.request('test-url', mockConfig);

    expect(url).toEqual('test-url');
    expect(config.headers).toEqual({
      'test-header': 'test',
      [CSRF_HEADER]: testToken,
    });
  });

  it('should not insert CSRF token in request if present', async () => {
    mockStorage.getCSRFToken.mockImplementation(() => null);

    const mockConfig = {
      body: 'test-body',
      headers: { 'test-header': 'test' },
    };

    const [url, config] = await csrfInterceptor.request('test-url', mockConfig);

    expect(url).toEqual('test-url');
    expect(config).toEqual(mockConfig);
  });
});
