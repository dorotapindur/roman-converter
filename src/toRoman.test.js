import toRoman from './toRoman';

describe('toRoman()', () => {
    it('converts 1 to I', () => {
        expect(toRoman(1)).toEqual('I')
    });

    it('converts 5 to V', () => {
        expect(toRoman(5)).toEqual('V')
    });

    it('does not converts 0 to any number', () => {
        expect(toRoman(0)).toEqual('none')
    });
})