function toRoman(arabic) {
    let roman;
    let romanSingle = '';
    let romanTens = '';

    if (arabic <= 0) {
        roman = 'none';
    } else {
   
        if (arabic == 1) {
            romanSingle = 'I'
        }
        if (arabic == 2) {
            romanSingle = 'II'
        }
        if (arabic == 3) {
            romanSingle = 'III'
        }
        if (arabic == 4) {
            romanSingle = 'IV'
        }
        if (arabic == 5) {
            romanSingle = 'V'
        }
        if (arabic == 6) {
            romanSingle = 'VI'
        }
        if (arabic == 7) {
            romanSingle = 'VII'
        }
        if (arabic == 8) {
            romanSingle = 'VIII'
        }
        if (arabic == 9) {
            romanSingle = 'IX'
        }

        if (arabic == 10) {
            romanTens = 'X'
        }
        if (arabic == 20) {
            romanTens = 'XX'
        }
        if (arabic == 30) {
            romanTens = 'XXX'
        }
        if (arabic == 40) {
            romanTens = 'XL'
        }
        if (arabic == 50) {
            romanTens = 'L'
        }
        if (arabic == 60) {
            romanTens = 'LX'
        }
        if (arabic == 70) {
            romanTens = 'LXX'
        }
        if (arabic == 80) {
            romanTens = 'LXXX'
        }
        if (arabic == 90) {
            romanTens = 'XC'
        }
        roman = romanTens + romanSingle;
    }

    return roman;
}

export default toRoman;