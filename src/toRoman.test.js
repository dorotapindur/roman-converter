import toRoman from './toRoman';

describe('toRoman()', () => {
    it.each([
        [1, 'I'],
        [2, 'II'],
        [3, 'III'],
        [4, 'IV'],
        [5, 'V'],
        [6, 'VI'],
        [7, 'VII'],
        [8, 'VIII'],
        [9, 'IX']
    ])('converts %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });

    it.each([
        [10, 'X'],
        [20, 'XX'],
        [30, 'XXX'],
        [40, 'XL'],
        [50, 'L'],
        [60, 'LX'],
        [70, 'LXX'],
        [80, 'LXXX'],
        [90, 'XC']
    ])('converts %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });

    it('does not converts 0 to any number', () => {
        expect(toRoman(0)).toEqual('none')
    });
})