//Write a function that, given a string, Finds the longest run of identical characters and returns an array containing the start and end indices of that run.
//If there are two runs of equal length, return the first one.

var longestRun = function (string) {
    let result = [0, 0];
    let temp = [0, 0];
    for (let i = 1; i < string.length; i++) {
        if (string[i] !== string[i - 1]) {
            if (temp[1] - temp[0] > result[1] - result[0]) {
                result = temp;
            }
            temp = [i, i];
        } else {
            temp[1] = i;
        }
    }
    return result;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

// one of the tests - expect(longestRun("abbbcc")).to.eql([1, 3]); -> 1, 3 refer to the first and last index of b