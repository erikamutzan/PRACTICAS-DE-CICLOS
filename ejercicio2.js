/* Exercise #2 (sugerencia map() )
Write a function that: 
 Takes in an array of numbers.
 Doubles the value of each number in the array. 
 Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10] */


function arrayDoubleFor(arr) {
    for(i =0; i<arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}

function arrayDoubleMap(arr) {
const map = arr.map((x) => x * 2);
return map;
}

console.log(arrayDoubleMap([1,2,4,5]));

console.log(arrayDoubleFor([1,2,4,5]));