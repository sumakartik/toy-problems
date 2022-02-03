// Write a function that takes up to four digits of a phone number, and returns a list of all of the words that can be written on the phone with that number. (You should return all permutations, not only English words.)

// Example:

// telephoneWords('2745');
// => ['APGJ',
//     'APGK',
//     'APGL',
//     ..., // many many more of these
//     'CSIL']
// Tips:

// Phone numbers are strings!(A phone number can start with a zero.)
// The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
//     Don't return every combination of those digits in any order, just the order given.
// Extra credit: There's a list of English dictionary words at /usr/share/dict/words . Why not filter your results to only return words contained in that file?

// var phoneDigitsToLetters = {
//     0: '0',
//     1: '1',
//     2: 'ABC',
//     3: 'DEF',
//     4: 'GHI',
//     5: 'JKL',
//     6: 'MNO',
//     7: 'PQRS',
//     8: 'TUV',
//     9: 'WXYZ'
// };

function telephoneWords (digitString) {
    var results = [];
    function comboBuilder(string,idx) {
    if(string.length === digitString.length){
        results.push(string)
        return;
    }
    let tDigits = telephoneDigits[digitString[idx]];
    for(var i = 0; i < tDigits.length; i++){
        let index = idx + 1;
        comboBuilder(string+tDigits[i],index);
    }
    }
    comboBuilder("",0);
    return results;
}
let telephoneDigits = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
};  