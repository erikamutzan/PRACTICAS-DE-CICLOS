/* Write a program to compute the sum and product (multiplication) of an array of
numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24. */


function sumAndProduct(arr) {
    let resultSuma = 0;
    let multiResult = 1; 
    arr.map((x) =>  resultSuma = x + resultSuma);
    arr.map((x) =>  multiResult = x * multiResult);
    console.log(resultSuma, multiResult);
}
sumAndProduct([1,2,3,4]);

function reduceTest(arr) {
    const sumaDelArreglo = arr.reduce( (acumulador, valorActual) => acumulador + valorActual, 
    0);
    const multiplicationArreglo = arr.reduce((acumulador, valorActual) => acumulador * valorActual, 
    1);
    console.log(sumaDelArreglo);
    console.log(multiplicationArreglo);
}
reduceTest([1,2,3,4]);