import { stringifyQuery, includeField, timeout } from './util';
import { syncify } from './test-util';

jest.useFakeTimers();

describe('Util', () => {
  describe('timeout', () => {
    it('should cancel long running operation', async () => {
      const TTFB = 10000000;
      const longRunningPromise = new Promise(resolve =>
        setTimeout(resolve, TTFB),
      );
      const operationPromise = syncify(() =>
        timeout(TTFB / 2, longRunningPromise),
      );

      jest.advanceTimersByTime(TTFB);

      const operation = await operationPromise;
      expect(operation).toThrow();
    });

    it('should let continue normal operations with return values', async () => {
      const returnValue = ['hello', 'world'];
      const TTFB = 10000;
      const longRunningPromise = new Promise(resolve =>
        setTimeout(() => resolve(returnValue), TTFB),
      );
      const operationPromise = syncify(() =>
        timeout(TTFB * 2, longRunningPromise),
      );

      jest.advanceTimersByTime(TTFB);

      let operation = await operationPromise;

      // wait for potential timeout
      jest.advanceTimersByTime(TTFB * 2);

      // expect still no errors
      operation = await operationPromise;

      expect(operation).not.toThrow();
      expect(operation()).toEqual(returnValue);
    });
  });

  describe('includeField', () => {
    it('should add and override properties to source object', () => {
      const actual = includeField(
        { test: 'test', prop1: 'test-prop' },
        { test: 'test-new', prop2: 'test-prop' },
      );
      expect(actual).toEqual({
        test: 'test-new',
        prop1: 'test-prop',
        prop2: 'test-prop',
      });
    });

    it('should handle null values', () => {
      expect(includeField(null, { test: 'test' })).toEqual({
        test: 'test',
      });
    });
  });

  describe('stringifyQuery', () => {
    it('should construct a query string', () => {
      const actual = stringifyQuery({ test: '1', test2: '2' });
      expect(actual).toEqual('test=1&test2=2');
    });

    it('should HTML encode elements', () => {
      const actual = stringifyQuery({ "a'b": '<test></test>' });
      expect(actual).toEqual("a'b=%3Ctest%3E%3C%2Ftest%3E");
    });
  });
});
