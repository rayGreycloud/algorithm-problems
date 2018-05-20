/*
  Find the smallest common multiple of the provided parameters that 
  can be evenly divided by both, as well as by all sequential numbers
  in the range between these parameters.
*/

function smallestCommons(arr) {
  // Create empty range
  let range = [];
  // Push all numbers in range to array
  for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }
  // Euclidean algorithm
  const euclidean = (x, y) => (y === 0 ? x : euclidean(y, x % y));

  let smallest = range[0];
  for (let i = 1; i < range.length; i++) {
    let gcd = euclidean(smallest, range[i]);
    smallest = smallest * range[i] / gcd;
  }

  return smallest;
}

console.log(smallestCommons([1, 5]));
