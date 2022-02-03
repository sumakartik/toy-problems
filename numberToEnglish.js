// Extend the Number prototype with a new method called toEnglish.It should return the number as a string using English words.
//Examples: (7).toEnglish(); // > "seven" (575).toEnglish(); // > "five hundred seventy-five" (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"

// Extra credit: Make your function support decimals.Example: (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"

var numbersToWords = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
};
var numbersToPlace = {
    10: "ten",
    100: "hundred",
    1000: "thousand",
    1000000: "million",
    1000000000: "billion",
    1000000000000: "trillion",
    1000000000000000: "quadrillion",
    1000000000000000000: "quintillion"
};

//convert number to string
//declare empty array
//declare empty string for sections
//declare place counter
//declare length counter
//declare result string



Number.prototype.toEnglish = function () {
    // return my value as english words
    if (numbersToWords[this]) {
        return numbersToWords[this];
    }

    let numberInString = "";
    let places = Object.keys(numbersToPlace);
    places.shift();
    const makeNumberToString = number => {
        for (let i = places.length - 1; i >= 0; i--) {
            if (number / places[i] >= 1) {
                let numberOfPlace = Math.floor(number / places[i]);
                if (numbersToWords[numberOfPlace]) {
                    numberInString +=
                        numberInString.length > 0
                            ? " " + numbersToWords[numberOfPlace]
                            : "" + numbersToWords[numberOfPlace];
                } else {
                    makeNumberToString(numberOfPlace);
                }
                numberInString += " " + numbersToPlace[places[i]];
                number = number - numberOfPlace * places[i];
            }
            if (i === 0 && number > 0) {
                if (numberInString.length > 0) {
                    numberInString += " ";
                }
                if (numbersToWords[number]) {
                    numberInString += numbersToWords[number];
                } else {
                    let tenth = number / 10;
                    let oneth = number % 10;
                    if (tenth > 1) {
                        numberInString += numbersToWords[Math.floor(tenth) * 10] + "-";
                    }
                    numberInString += numbersToWords[oneth];
                }
            }
        }
    };
    const makePlace = number => {
        let string = "";
        if (numbersToPlace[number]) {
            return numbersToPlace[number];
        } else {
            for (let i = 0; i < places.length - 1; i++) {
                if (number > places[i] && number < places[i + 1]) {
                    string +=
                        numbersToPlace[number / places[i]] +
                        "-" +
                        numbersToPlace[places[i]];
                }
            }
            return string;
        }
    };
    let numberInArr = this.toString().split(".");
    for (let i = 0; i < numberInArr.length; i++) {
        if (i > 0 && numberInString.length > 0) {
            numberInString += " and";
        }
        makeNumberToString(Number(numberInArr[i]));
        if (i > 0) {
            if (numberInString !== "one") {
                numberInString +=
                    " " + makePlace(Math.pow(10, numberInArr[i].length)) + "ths";
            } else {
                numberInString +=
                    " " + makePlace(Math.pow(10, numberInArr[i].length)) + "th";
            }
        }
    }
    return numberInString;

};

const toEnglish = Number.prototype.toEnglish;


// var numbersToWords = {
//     0: 'zero',
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     4: 'four',
//     5: 'five',
//     6: 'six',
//     7: 'seven',
//     8: 'eight',
//     9: 'nine',
//     10: 'ten',
//     11: 'eleven',
//     12: 'twelve',
//     13: 'thirteen',
//     14: 'fourteen',
//     15: 'fifteen',
//     16: 'sixteen',
//     17: 'seventeen',
//     18: 'eighteen',
//     19: 'nineteen',
//     20: 'twenty',
//     30: 'thirty',
//     40: 'forty',
//     50: 'fifty',
//     60: 'sixty',
//     70: 'seventy',
//     80: 'eighty',
//     90: 'ninety',
// };

// var numbersToPlace = {
//     10: 'ten',
//     100: 'hundred',
//     1000: 'thousand',
//     1000000: 'million',
//     1000000000: 'billion',
//     1000000000000: 'trillion',
//     1000000000000000: 'quadrillion',
//     1000000000000000000: 'quintillion',
// };

// Number.prototype.toEnglish = function () {
//     var numberString = this.toString();
//     var number = [];
//     var section = '';
//     var place = '1';
//     var counter = 0;
//     var result = '';
//     var notAllZeros = false;

//     if (numberString === '0') {
//         return 'zero';
//     }

//     // CREATE ARRAY
//     if (numberString.length > 3) {
//         for (var i = numberString.length - 3; i > -3; i -= 3) {
//             var start = Math.max(0, i);
//             number.unshift(numberString.slice(start, i + 3));
//         }
//     } else {
//         number.push(numberString);
//     }

//     // LOOP THROUGH ARRAY
//     counter = number.length - 1;
//     for (var j = 0; j < number.length; j++) {
//         var piece = number[j];
//         var len = piece.length - 2;
//         for (var k = 0; k < piece.length; k++) {
//             if (len === 1) {
//                 if (piece[k] === '0') {
//                     len--;
//                     continue;
//                 }
//                 section += numbersToWords[piece[k]] + ' ' +
//                     numbersToPlace['100'] + ' ';
//                 notAllZeros = true;
//             } else if (len === 0) {
//                 if (piece[k] === '1') {
//                     section += numbersToWords[piece[k] + piece[k + 1]] + ' ';
//                     notAllZeros = true;
//                     k++;
//                     continue;
//                 } else if (piece[k] === '0') {
//                     len--;
//                     continue;
//                 } else if (piece[k + 1] === '0') {
//                     section += numbersToWords[piece[k] + '0'] + ' ';
//                     notAllZeros = true;
//                     continue;
//                 } else {
//                     section += numbersToWords[piece[k] + '0'] + '-';
//                     notAllZeros = true;
//                 }
//             } else {
//                 if (piece[k] === '0') {
//                     continue;
//                 }
//                 section += numbersToWords[piece[k]] + ' ';
//                 notAllZeros = true;
//             }
//             len--;
//         }
//         result += section;
//         section = '';
//         if (notAllZeros) {
//             if (counter > 0) {
//                 for (var l = 0; l < counter; l++) {
//                     place += '000';
//                 }
//                 result += numbersToPlace[place] + ' ';
//             }
//         }
//         notAllZeros = false;
//         counter--;
//         place = '1';
//     }

//     return result.slice(0, -1);
// };