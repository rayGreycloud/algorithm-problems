/*
  Return the lowest index at which a value (second argument) should be
  inserted into an array (first argument) once it has been sorted. 
  The returned value should be a number.
*/

function getIndexToIns(arr, num) {
  // Sort array 
  const sorted = arr.sort((a, b) => a - b);
  
  // Find index of value > num 
  const index = sorted.findIndex(item => item >= num);
  
  return index === -1 ? sorted.length : index;
}

console.log(
  getIndexToIns([2, 5, 10], 15)
);

