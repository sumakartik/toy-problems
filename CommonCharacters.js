var commonCharacters = function (string1, string2) {
    let duplicateCharacter = '';
    for (let i = 0; i < string1.length; i += 1) {
      if (duplicateCharacter.indexOf(string1[i]) === -1) {
        if (string2.indexOf(string1[i]) !== -1) {
          duplicateCharacter += string1[i];
        }
      }
    }
    return duplicateCharacter;
  };
  
  console.log(commonCharacters('acexivou', 'aegihobu'))
  

// what are the letters thay are pervasive in more than 2 strings - there are 6 strings in there to test (one is qweerty) and you need to find y as the common
// write to be flexible regardless of the numbers of arguments provided