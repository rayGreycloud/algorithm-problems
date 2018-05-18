/*
  Given array of two numbers, return sum of all numbers between, inclusive.
*/

function sumAll(arr) {
  let array = [];
  
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    array.push(i);
  }
  
  return array.reduce((acc, cur) => acc + cur);
}

console.log(
  sumAll([1, 4])
);
