//Implement a function that finds the longest palindrome in a given string. For example, in the string "My dad is a race car athlete", the longest palindrome is "a race car a".
//Count whitespaces as valid characters. Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).

var longestPalindrome = function(string) {
    var longest = '';
    for (var i = 0; i < string.length; i++) {
        var currentLetter = string[i];
        var firstLetter;
        for (var j = i + 1; j < string.length; j++) {
            if (currentLetter === string[j]) {
                firstLetter = j;
                var subString = string.slice(i, firstLetter + 1);
                if (subString.length > longest.length &&
                    subString.toLowerCase() === subString.split('').reverse().join('').toLowerCase()) {
                    longest = subString;
                }
            }
        }
    }
    return longest;
}

