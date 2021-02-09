import toRoman from './toRoman';

describe('toRoman()', () => {
    it.each([
        [1, 'I'],
        [5, 'V'],
    ])('converts %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });

    it('does not converts 0 to any number', () => {
        expect(toRoman(0)).toEqual('none')
    });
})