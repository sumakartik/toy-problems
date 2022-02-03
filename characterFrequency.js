//Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

//pseudocode
//define variable where we will store results
//loop thru array
//grab each character
//check if character exists as key in hash table
//if already exists, add one to count
//if doesn't exist, start the count at 1
//push array of key and value pair into results array    
//now we need to sort the results array
//write compare function that first sorts by descending order 
//of frequency and then by ascending order by character.
//return sorted array!  


function characterFrequency (string) {
    //define a charFreq object and results array
    var charFreq = {};
    var result = [];
    //loop thru array
    for(var i = 0; i < string.length; i++) {
     //grab each character
     var character = string.charAt(i);
     //check if character exists as key in hash table
     if(charFreq[character]) {
      //if it already exists, add one to count
      charFreq[character]++;
     } else {
      //if it doesn't, start the count at 1
      charFreq[character] = 1;
     }
    }
    //push array of key and values into results array
    for (var key in charFreq) {
     result.push([key, charFreq[key]])
    }
    //compare function that first sorts by descending order 
    //by frequency and then by ascending order by character.
    result.sort(function(a, b) {
     if (a[1] > b[1]) return -1;
     if (a[1] < b[1]) return 1; 
     if (a[1] === b[1]) {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
     }
     return 0;
    });
  return result;
  }

//   Test SpeechRecognitionResultListcharacterFrequency
//   ✓ should exist
//   ✓ should be a function
//   ✓ should return an array of arrays
//   ✓ should return key-value pairs of letters and numbers
//   ✓ should return one key-value pair for each unique letter in the string
//   ✓ should sort by descending order in frequency
//   ✓ should sort by ascending order of letters
//   ✓ should sort priorities sorting by frequence over sorting by letter
//   ✓ should handle the empty string degenerate case
//   ✓ should give the expected result for `supercalifragilisticexpialidocious`