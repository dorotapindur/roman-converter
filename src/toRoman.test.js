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

    it.each([
        [100, 'C'],
        [200, 'CC'],
        [300, 'CCC'],
        [400, 'CD'],
        [500, 'D'],
        [600, 'DC'],
        [700, 'DCC'],
        [800, 'DCCC'],
        [900, 'CM']
    ])('converts %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });

    it.each([
        [1000, 'M'],
        [2000, 'MM'],
        [3000, 'MMM'],
        [4000, '|XL|'],
        [5000, '|L|'],
        [6000, '|LX|'],
        [7000, '|LXX|'],
        [8000, '|LXXX|'],
        [9000, '|XC|'],
        [10000, '|C|'],
    ])('converts %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });

    it('does not converts 0 to any number', () => {
        expect(toRoman(0)).toEqual('none')
    });

    it('does not convert negative to any number', () => {
        let arabic = -134;
        expect(toRoman(arabic)).toEqual('none');
    });
    it('does not convert numbers higher than 10000', () => {
        let arabic = 10345;
        expect(toRoman(arabic)).toEqual(`${arabic} is too high for me!`);
    });

})