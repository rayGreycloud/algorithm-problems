/*
  Drop elements of an array until an element passes a truth test 
  passed as second argument. Return remaining elements or empty array.
*/

function dropElements(arr, func) {
  
  while(!func(arr[0]) && arr.length > 0) {
    arr.shift();
  }

  return arr;
}

console.log(
  dropElements([1, 2, 3], function(n) {return n > 5; })
);
