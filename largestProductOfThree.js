const largestProductOfThree = (array) => {
    // TODO: solution here
    // sorts numbers in order from smallest to largest
    array = array.sort((a, b) => a - b);
    // sorts number in reverse order, so largest to smallest
    array = array.reverse();
    // takes first 3 numbers of the array
    array = array.slice(0, 3)
    // calls next multiply function on the array
    array = multiply(array);
    // returns result
    return array;
};


function multiply(array) {
    // sets sum equal to one
    let sum = 1;
    // creates for loop to iterate through the array
    for (var i = 0; i < array.length; i++) {
        // takes the number 1 and multiplies it on the current index
        sum *= array[i]
    }
    // returns the product of all 3 numbers
    return sum;
};
// const largestProductOfThree = (array) => {
//   // TODO: solution here
//   console.log('Presort: ', array);
//   array = array.sort((a,b)=> a || b);
//   array - array.reverse();
//   console.log('Presort: ', array)

//   let answer = array [0]*array[1]*array[2];

//   return answer;
// };