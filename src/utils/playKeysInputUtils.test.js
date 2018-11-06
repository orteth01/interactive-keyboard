import { getKeysFromPlayKeysInput, isPlayKeysInputInvalid } from './playKeysInputUtils';

describe('playKeysInputUtils', () => {
    describe('isPlayKeysInputInvalid', () => {
        describe('valid values', () => {
            test.each([
                '',
                'a, a#, b, c, c#, d, d#, e, f, f#, g, g#',
                'A, A#, B, C, C#, D, D#, E, F, F#, G, G#',
                'a,,,b',
                'a, b, c,',
            ])('%s should be valid', (value) => {
                expect(isPlayKeysInputInvalid(value)).toBeFalsy();
            });
        });
        describe('invalid values', () => {
            test.each([
                'abcdefg',
                'A#,B#,C',
                '12345',
                '&&a23#%@#&shjgs',
            ])('%s should be invalid', (value) => {
                expect(isPlayKeysInputInvalid(value)).toBeTruthy();
            });
        });
    });
    describe('getKeysFromPlayKeysInput', () => {
        test('"a, b, c, d, e, f, g"', () => {
            expect(getKeysFromPlayKeysInput('a, b, c, d, e, f, g')).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
        });
        test('"a,,,,g" - consecutive commas', () => {
            expect(getKeysFromPlayKeysInput('a, , , , g')).toEqual(['a', 'g']);
        });
        test('"a,b,c," - trailing comma', () => {
            expect(getKeysFromPlayKeysInput('a,b,c,')).toEqual(['a', 'b', 'c']);
        });
        test('"   a,    b,c     " - whitespace', () => {
            expect(getKeysFromPlayKeysInput('a,b,c,')).toEqual(['a', 'b', 'c']);
        });
    });
});
