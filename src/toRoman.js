function toRoman(arabic) {
    let roman;
    let romanSingle = '';
    let romanTens = '';
    let romanHundreds = '';
    let romanThousands = '';

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

        if (arabic == 100) {
            romanHundreds = 'C'
        }
        if (arabic == 200) {
            romanHundreds = 'CC'
        }
        if (arabic == 300) {
            romanHundreds = 'CCC'
        }
        if (arabic == 400) {
            romanHundreds = 'CD'
        }
        if (arabic == 500) {
            romanHundreds = 'D'
        }
        if (arabic == 600) {
            romanHundreds = 'DC'
        }
        if (arabic == 700) {
            romanHundreds = 'DCC'
        }
        if (arabic == 800) {
            romanHundreds = 'DCCC'
        }
        if (arabic == 900) {
            romanHundreds = 'CM'
        }
        roman = romanHundreds + romanTens + romanSingle;
    }

    return roman;
}

export default toRoman;