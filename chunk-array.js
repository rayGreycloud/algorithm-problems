/*
 Split an array (first argument) into groups the length of 
 size (second argument) and return them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  let remainder = arr;
  let resultArr = [];

  while (remainder.length > 0) {
    const chunk = remainder.slice(0, size);
    remainder = remainder.slice(size);
    resultArr.push(chunk);
  }  

  return resultArr;
}

console.log(
chunkArrayInGroups(["a", "b", "c", "d"], 2)
);
