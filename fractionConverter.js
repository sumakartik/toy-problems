//Write a function that takes a number as its argument and returns a string that represents that number's simplified fraction.

// Example: toFraction(0.5) === '1/2'

// Whole numbers and mixed fractions should be returned as irregular fractions

// Example: toFraction(3.0) === '3/1'

// Example: toFraction(2.5) === '5/2'

var toFraction = function (number) {
    
    //whole number - do nothing

    if (parseFloat(number) === parseInt(number)) {
        return number;
    }

    //The Euclidean algorithm calculates the greatest common divisor (GCD) of two natural numbers a and b. 
    //The greatest common divisor g is the largest natural number that divides both a and b without leaving a remainder.

    var greatestCommonDivisor = function (a, b) {
        if (!b) {
            return a;
        }
        return greatestCommonDivisor(b, Math.floor(a % b));
    };

    var len = number.toString().length - 2;
    var denominator = Math.pow(10, len);
    var numerator = number * denominator;
    var divisor = greatestCommonDivisor(numerator, denominator);
    numerator /= divisor;
    denominator /= divisor;
    var base = 0;

    // improper fractions to mixed numbers

    if (numerator > denominator) {
        base = Math.floor(numerator / denominator);
        numerator -= base * denominator;
    }
    number = Math.floor(numerator) + '/' + Math.floor(denominator);
    if (base) {
        number = base + ' ' + number;
    }
    return number;
};