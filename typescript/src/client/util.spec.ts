import { stringifyQuery } from './util';

describe('Util', () => {
    describe('stringifyQuery', () => {
        it('should construct a query string', () => {
            const actual = stringifyQuery({ test: '1', test2: '2' });
            expect(actual).toEqual("test=1&test2=2");
        });

        it('should HTML encode elements', () => {
            const actual = stringifyQuery({ "a'b": '<test></test>' });
            expect(actual).toEqual("a'b=%3Ctest%3E%3C%2Ftest%3E");
        });
    });
});