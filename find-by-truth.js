/*
  Create a function that searches given array and returns the first element
  that passes a truth test passed as second argument.
*/

function findElement(arr, func) {
  
  return arr.filter(func)[0];

}

console.log(
  findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; })
);
