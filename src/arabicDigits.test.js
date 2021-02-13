import { arabicSingle, arabicTens, arabicHundreds, arabicThousands }  from './arabicDigits.js';

describe('arabicDigits()', () => {
    it('returns 3 as last digit of number 23', () => {
        expect(arabicSingle(23)).toEqual('3');
    });
    it('returns 2 as tens-digit of number 23', () => {
        expect(arabicTens(23)).toEqual('2');
    });
    it('returns 5 as hundreds-digit of number 523', () => {
        expect(arabicHundreds(523)).toEqual('5');
    });
    it('returns 10 as thousands-digits of number 10000', () => {
        expect(arabicThousands(10000)).toEqual('10');
    });
})