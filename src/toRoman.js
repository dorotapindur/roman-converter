import { arabicSingle, arabicTens, arabicHundreds, arabicThousands }  from './arabicDigits.js';

function toRoman(arabic) {
    let roman;
    let romanSingle = '';
    let romanTens = '';
    let romanHundreds = '';
    let romanThousands = '';

    if (arabic <= 0) {
        roman = 'none';
    } else if (arabic > 10000) {
        roman = `${arabic} is too high for me!`;
    } else {
        //singles
        if (arabicSingle(arabic) == 1) {
            romanSingle = 'I'
        }
        if (arabicSingle(arabic) == 2) {
            romanSingle = 'II'
        }
        if (arabicSingle(arabic) == 3) {
            romanSingle = 'III'
        }
        if (arabicSingle(arabic) == 4) {
            romanSingle = 'IV'
        }
        if (arabicSingle(arabic) == 5) {
            romanSingle = 'V'
        }
        if (arabicSingle(arabic) == 6) {
            romanSingle = 'VI'
        }
        if (arabicSingle(arabic) == 7) {
            romanSingle = 'VII'
        }
        if (arabicSingle(arabic) == 8) {
            romanSingle = 'VIII'
        }
        if (arabicSingle(arabic) == 9) {
            romanSingle = 'IX'
        }
        //tens
        if (arabicTens(arabic) == 1) {
            romanTens = 'X'
        }
        if (arabicTens(arabic) == 2) {
            romanTens = 'XX'
        }
        if (arabicTens(arabic) == 3) {
            romanTens = 'XXX'
        }
        if (arabicTens(arabic) == 4) {
            romanTens = 'XL'
        }
        if (arabicTens(arabic) == 5) {
            romanTens = 'L'
        }
        if (arabicTens(arabic) == 6) {
            romanTens = 'LX'
        }
        if (arabicTens(arabic) == 7) {
            romanTens = 'LXX'
        }
        if (arabicTens(arabic) == 8) {
            romanTens = 'LXXX'
        }
        if (arabicTens(arabic) == 9) {
            romanTens = 'XC'
        }
        //hundreds
        if (arabicHundreds(arabic) == 1) {
            romanHundreds = 'C'
        }
        if (arabicHundreds(arabic) == 2) {
            romanHundreds = 'CC'
        }
        if (arabicHundreds(arabic) == 3) {
            romanHundreds = 'CCC'
        }
        if (arabicHundreds(arabic) == 4) {
            romanHundreds = 'CD'
        }
        if (arabicHundreds(arabic) == 5) {
            romanHundreds = 'D'
        }
        if (arabicHundreds(arabic) == 6) {
            romanHundreds = 'DC'
        }
        if (arabicHundreds(arabic) == 7) {
            romanHundreds = 'DCC'
        }
        if (arabicHundreds(arabic) == 8) {
            romanHundreds = 'DCCC'
        }
        if (arabicHundreds(arabic) == 9) {
            romanHundreds = 'CM'
        }

        if (arabicThousands(arabic) == 1) {
            romanThousands = 'M'
        }
        if (arabicThousands(arabic) == 2) {
            romanThousands = 'MM'
        }
        if (arabicThousands(arabic) == 3) {
            romanThousands = 'MMM'
        }
        if (arabicThousands(arabic) == 4) {
            romanThousands = '|XL|'
        }
        if (arabicThousands(arabic) == 5) {
            romanThousands = '|L|'
        }
        if (arabicThousands(arabic) == 6) {
            romanThousands = '|LX|'
        }
        if (arabicThousands(arabic) == 7) {
            romanThousands = '|LXX|'
        }
        if (arabicThousands(arabic) == 8) {
            romanThousands = '|LXXX|'
        }
        if (arabicThousands(arabic) == 9) {
            romanThousands = '|XC|'
        }
        if (arabicThousands(arabic) == 10) {
            romanThousands = '|C|'
        }

        roman = romanThousands + romanHundreds + romanTens + romanSingle;
    }

    return roman;
}

export default toRoman;