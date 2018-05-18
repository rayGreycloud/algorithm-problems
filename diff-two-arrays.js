/*
  Compare two arrays and return a new array with any items only found
  in one of the two given arrays, but not both.
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  
  arr1.map(item => {
    if (arr2.indexOf(item) === -1) {
      newArr.push(item);
    }    
  });
  
  arr2.map(item => {
    if (arr1.indexOf(item) === -1) {
      newArr.push(item);
    }    
  });
   
  return newArr;
}

console.log(
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
);
