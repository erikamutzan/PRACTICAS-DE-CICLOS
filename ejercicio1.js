/* Exercise #1 ( sugerencia join() )
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
 // your code here
}
printOutString();
Complete the function to print out the string: This is a sentence. */

let arr = ["This", "is", "a", "sentence."];

function printOutString() {
    let stringFinal ="";
    for(i = 0; i < arr.length; i++) {
        let stringElementArray = arr[i];
        stringFinal = stringFinal + " " + stringElementArray
    }
    return stringFinal;
} 
console.log(printOutString());

//JOIN
console.log(arr.join(' '));