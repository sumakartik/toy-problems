//Bubble sort is the most basic sorting algorithm in all of Computer Sciencedom. 
//It works by starting at the first element of an array and comparing it to the second element; if the first element is greater than the second element, it swaps the two.
//It then compares the second to the third, and the third to the fourth, and so on; in this way, the largest values "bubble" to the end of the array. 
//Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
//Implement a function that takes an array and sorts it using this technique. Don't use JavaScript's built-in sorting function (Array.prototype.sort).

//QUERY: What's the time complexity of your algorithm? If you don't already know, try to intuit this without consulting the Googles.

//Extra credit: Optimization time! During any given pass, if no elements are swapped we can assume the list is sorted and can exit the function early. After this optimization, what is the time complexity of your algorithm ?

//More credits: Do you need to consider every element every time you iterate through the array ? Make it happen, boss.Again: Has the time complexity of your algorithm changed ?

//Example usage:

// bubbleSort([2, 1, 3]); // yields [1, 2, 3]
// Feel free to add helper functions if needed.

var bubbleSort = function (array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j = array.length - i - 1; j++) {
            let swap = array[j];
            if (array[j] > array[j + 1]) {
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }

};

var bubbleSort = function (array) {
    // Your code here.
    let sort = true;

    var index1 = 0
    var index2 = index1 + 1;

    while (sort) {
        sort = false;


        console.log('Sort Value START: ', sort);
        console.log('Index 1: ', index1);
        console.log('Index 2: ', index2);

        //this conditional needs to be in another loop
        if (array[index1] > array[index2]) {

            console.log('Swapping Index /// Array Value 1: ///Array Value 2: ', index1, index2, array[index1], array[index2]);

            let swapIndex = array[index1];

            array[index1] = array[index2];
            array[index2] = swapIndex;
            sort = false;
            console.log("Sort Value IF SWAP: ", sort);
            //index1++;
        }

        else {
            index1++
            index2++
        }

        if (index1 === array.length) {
            index1 = 0;
            index2 = index1 + 1;
            sort = true;
        }

        console.log("Sort Value END: ", sort);


    }
    return array;

};