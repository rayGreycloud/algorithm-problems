/*
  Given a number, return sum of all prime numbers up to and including that number.
*/

function sumPrimes(num) {
  // Check if number is prime and return bool
  const isPrime = number => {
    // Iterate from 2 to number
    for (i = 2; i <= number; i++) {
      // If divisible, it's not prime
      if (number % i === 0 && number != i) {
        return false;
      }
    }
    // If we get here, the number is prime
    return true;
  };

  // Handle special case of 1
  if (num === 1) {
    return 0;
  }

  // If number is not prime, check the next number down
  // If prime, add it to the next number in sequence
  return isPrime(num) === false ? sumPrimes(num - 1) : num + sumPrimes(num - 1);
}

console.log(sumPrimes(10));
