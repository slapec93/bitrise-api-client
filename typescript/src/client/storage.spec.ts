import { ConstantTokenStorage, CookieTokenStorage } from './storage';

const testToken = "test-token";

const mockCookieStorage = {
    setItem: jest.fn(),
    getItem: jest.fn(),
};

jest.mock('cookie-storage', () => ({
    CookieStorage: jest.fn().mockImplementation(() => mockCookieStorage)
}));

jest.mock('./util', () => ({
    dateFromNow: (input: number) => input
}));

describe('CookieStorage', () => {
    let cookieStorage: CookieTokenStorage;
    const authTokenName = "authName";
    const CSRFTokenName = "csrfName";

    beforeEach(() => {
        mockCookieStorage.getItem.mockClear();
        mockCookieStorage.setItem.mockClear();

        cookieStorage = new CookieTokenStorage({ authTokenName, CSRFTokenName });
    });

    it('should get and store auth token with proper name', () => {
        cookieStorage.getAuthToken();
        expect(mockCookieStorage.getItem).toHaveBeenCalledWith(authTokenName);

        cookieStorage.storeAuthToken(testToken);
        expect(mockCookieStorage.setItem).toHaveBeenCalledWith(authTokenName, testToken, expect.anything());
    });

    it('should not store null tokens', () => {
        cookieStorage.storeAuthToken(null);
        expect(mockCookieStorage.setItem).not.toHaveBeenCalled();
    });

    it('should get CSRF token with correct name', () => {
        cookieStorage.getCSRFToken();
        expect(mockCookieStorage.getItem).toHaveBeenCalledWith(CSRFTokenName);
    });

    it('should convert "null" string to null value', () => {
        mockCookieStorage.getItem.mockImplementation(() => 'null');
        expect(cookieStorage.getAuthToken()).toBeNull();
        expect(cookieStorage.getCSRFToken()).toBeNull();
    });

    it('should set token with expiration parameter', () => {
        cookieStorage = new CookieTokenStorage({ authTokenName, CSRFTokenName, expirationSec: 10 });
        cookieStorage.storeAuthToken(testToken);

        expect(mockCookieStorage.setItem).toHaveBeenCalledWith(authTokenName, testToken, { expires: 10 });
    });
});

describe('ConstantStorage', () => {
    let constantStorage: ConstantTokenStorage;

    beforeEach(() => {
        constantStorage = new ConstantTokenStorage(testToken);
    });

    it('should store auth tokens', () => {
        expect(constantStorage.getAuthToken()).toEqual(testToken);
    });

    it('should not store CSRF tokens', () => {
        expect(constantStorage.getCSRFToken()).toBeNull();
    });

    it('should only set auth token if not nu;;', () => {
        constantStorage.storeAuthToken(null);
        expect(constantStorage.getAuthToken()).toEqual(testToken);

        constantStorage.storeAuthToken("token-2");
        expect(constantStorage.getAuthToken()).toEqual("token-2");
    });
});