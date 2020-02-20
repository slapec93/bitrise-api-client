
const fetchMock = require('jest-fetch-mock');
import { CSRFTokenInterceptor, CSRF_HEADER, AuthTokenInterceptor, TOKEN_HEADER } from './auth-interceptors';
import { syncify } from './test-util';

const testToken = "testToken";

const mockStorage = {
    getAuthToken: jest.fn(),
    getCSRFToken: jest.fn(),
    storeAuthToken: jest.fn()
};

describe('AuthTokenInterceptor', () => {
    let authTokenInterceptor :AuthTokenInterceptor;

    beforeEach(() => {
        fetchMock.resetMocks();
        authTokenInterceptor = new AuthTokenInterceptor(mockStorage);
    });

    beforeAll(() => fetchMock.enableMocks());
    afterAll(() => fetchMock.disableMocks());

    it('should intercept requests and get auth token if non specified', async () => {
        fetchMock.once(JSON.stringify({ token: testToken }));
        mockStorage.getAuthToken.mockImplementation(() => null);

        const mockConfig = {
            body: "test-body",
            headers: {"test-header": "test"}
        };

        const [, config] = await authTokenInterceptor.request('test-url', mockConfig);

        expect(fetchMock).toHaveBeenCalledTimes(1);
        expect(fetchMock).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                description: `API client - token request`,
                expire_in_seconds: 7200,
                registration_type: 'login'
            })
        }));

        expect(config.headers).toEqual({
            "test-header": "test",
            [TOKEN_HEADER]: `token ${testToken}`
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
            body: "test-body",
            headers: {"test-header": "test"}
        };

        const [url, config] = await authTokenInterceptor.request('test-url', mockConfig);

        expect(url).toEqual('test-url');
        expect(config.headers).toEqual({
            "test-header": "test",
            [TOKEN_HEADER]: `token ${testToken}`
        });
    });

    it('should replay failed reuqests only once', async () => {
        const mockResponse = <Response>{ status: 401, text: () => Promise.resolve("prev-response") };
        fetchMock.mockResponses("server-response");

        let response = await authTokenInterceptor.response(mockResponse);
        expect(await response.text()).toEqual("server-response");

        response = await authTokenInterceptor.response(mockResponse);
        expect(await response.text()).toEqual("prev-response");

        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should throw error in case authentication calls failed', async () => {
        fetchMock.mockResponses("token-response", { status: 500 });
        mockStorage.getAuthToken.mockImplementation(() => null);

        const actorSync = await syncify(() => authTokenInterceptor.request('test-url', {}));
        expect(actorSync).toThrow();
    });
});

describe('CSRFTokenInterceptor', () => {
    let csrfInterceptor :CSRFTokenInterceptor;

    beforeEach(() => {
        csrfInterceptor = new CSRFTokenInterceptor(mockStorage);
    });

    it('should insert CSRF token in request if present', async () => {
        mockStorage.getCSRFToken.mockImplementation(() => testToken);

        const mockConfig = {
            body: "test-body",
            headers: { "test-header": "test"}
        };

        const [url, config] = await csrfInterceptor.request("test-url", mockConfig);

        expect(url).toEqual("test-url");
        expect(config.headers).toEqual({
            "test-header": "test",
            [CSRF_HEADER]: testToken
        });
    });

    it('should not insert CSRF token in request if present', async () => {
        mockStorage.getCSRFToken.mockImplementation(() => null);

        const mockConfig = {
            body: "test-body",
            headers: { "test-header": "test"}
        };

        const [url, config] = await csrfInterceptor.request("test-url", mockConfig);

        expect(url).toEqual("test-url");
        expect(config).toEqual(mockConfig);
    });
});
