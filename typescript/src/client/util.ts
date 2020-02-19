import { QueryParameters } from './api';

export const timeout = <T>(ms: number, promise: Promise<T>): Promise<T> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`Timeout ${ms} msec exceeded`)), ms);
        promise.then(resolve, reject);
    });
};

export const stringifyQuery = (params: QueryParameters): string =>
    Object.keys(params).map((key) =>
        encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    ).join('&');

export const includeField = <T>(object: T, data: Object): T => ({ ...(object || {}), ...data }) as T;

export const dateFromNow = (second: number): Date => new Date(Date.now() + second * 1000);
