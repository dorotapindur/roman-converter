const arabicSingle = (arabic) => arabic.toString().slice(-1);
const arabicTens = (arabic) => arabic.toString().slice(-2, -1);
const arabicHundreds = (arabic) => arabic.toString().slice(-3, -2);
const arabicThousands = (arabic) => arabic.toString().slice(-5, -3);

export { arabicSingle, arabicTens, arabicHundreds, arabicThousands };