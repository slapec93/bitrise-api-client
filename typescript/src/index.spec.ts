import factory from './index';
import { AuthTokenInterceptor, CSRFTokenInterceptor } from './client/auth-interceptors';

let mockIsNode = false;
const mockCookieStorage = jest.fn();
const mockConstantStorage = jest.fn();

jest.mock('./client/auth-interceptors', () => ({
    AuthTokenInterceptor: jest.fn(),
    CSRFTokenInterceptor: jest.fn(),
    InterceptorChain: { of: jest.fn() },
}));

jest.mock('./client/storage', () => ({
    CookieTokenStorage: jest.fn().mockImplementation(() => mockCookieStorage),
    ConstantTokenStorage: jest.fn().mockImplementation(() => mockConstantStorage),
}));

jest.mock('./client/util', () => ({
    isNodePlatform: jest.fn().mockImplementation(() => mockIsNode),
}));

describe('Factory', () => {
    beforeEach(() => {
        mockIsNode = false;
    });

    it('should use ConstantStorage when token specified', () => {
        factory({ apiToken: 'testToken' });

        expect(AuthTokenInterceptor).toHaveBeenCalledWith(mockConstantStorage, expect.anything());
        expect(CSRFTokenInterceptor).toHaveBeenCalledWith(mockConstantStorage);
    });

    it('should throw error when token not specified in node', () => {
        mockIsNode = true;

        expect(() => {
            factory({});
        }).toThrow();
    });

    it('should use CookieStorage in browser', () => {
        factory({});

        expect(AuthTokenInterceptor).toHaveBeenCalledWith(mockCookieStorage, expect.anything());
        expect(CSRFTokenInterceptor).toHaveBeenCalledWith(mockCookieStorage);
    });

    it('should pass auth failure method to token interceptor', () => {
        const mockAuthFailure = jest.fn();
        factory({ authFailureCallback: mockAuthFailure });

        expect(AuthTokenInterceptor).toHaveBeenCalledWith(mockCookieStorage, { authFailureCallback: mockAuthFailure });
    });
});
