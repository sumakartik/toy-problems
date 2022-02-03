// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
var testingTransform = function (array) {
    var transform = [];

    for (var i = 0; i < array.length; i++) {
        transform.push({ value: array[i], i: i });
    }
    return transform;
};

var insertionSort = function (array) {
    // Your code goes here. Feel free to add helper functions if needed.

    // input -> array
    // output -> array of objects

    //outer loops to look at whole array
    for (let i = 1; i < array.length; i++) {

        let currentVal = array[i];
        let j = i - 1;

        //need inner loop to compare elements inside
        while ((j > -1) && (currentVal.value < array[j].value)) {
            array[j + 1] = array[j];
            // if statement \/
            if (currentVal.value === array[j].value) {


            }

            j--;
            //Inner compares values to find where it fits within the array AND if equal, needs to compare order too for placement
            //Dataset should look like this according to example: [{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]

        }

        array[j + 1] = currentVal;
    }
    return array;
};




// select the first unsorted element
//swap other elements to the right to create the correct position and shift the unsorted element
//loop shifts all the elements to right to create the position for the unsorted element
//advance the marker to the right one element

// function insertionSort(arr, n) {
//     let i, key, j;
//     for (i = 1; i < n; i++) {
//         key = arr[i];
//         j = i - 1;

//         /* Move elements of arr[0..i-1], that are 
//         greater than key, to one position ahead 
//         of their current position */
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }
// }
// // A utility function to print an array of size n 
// function printArray(arr, n) {
//     let i;
//     for (i = 0; i < n; i++)
//         document.write(arr[i] + " ");
//     document.write("<br>");
// }

// // Driver code
// let arr = [12, 11, 13, 5, 6];
// let n = arr.length;

// insertionSort(arr, n);
// printArray(arr, n);
