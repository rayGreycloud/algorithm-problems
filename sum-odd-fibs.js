/*
  Given a positive integer num, return the sum of all odd
  Fibonacci numbers that are less than or equal to num.
*/

function sumFibs(num) {
  // Handle special case
  if (num === 0) return num;
  
  // Create array of fibonacci numbers
  let fibs = [1];
  for (let i = 1; i <= num; ) {
    // Push number into fibs array
    fibs.push(i);
    // Increment to next Fibonacci
    i = fibs[fibs.length - 1] + fibs[fibs.length - 2];
  }
  
  // Return sum of all odd Fibonacci numbers 
  return fibs.reduce(
    (prev, curr) => curr % 2 !== 0 ? prev + curr : prev
  );
}

console.log(
  sumFibs(4)
);
