// Original version
function fizzBuzz1(limit) {
  for (i = 1; i < 11; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// Shorter version
function fizzBuzz2(limit) {
  for (i = 1; i <= limit; i++) {
    let count = '';
    count = i % 3 === 0 ? count + 'Fizz' : count;
    count = i % 5 === 0 ? count + 'Buzz' : count;
    console.log(count === '' ? i : count);
  }
}

// Improved short version
function fizzBuzz(limit) {
  for (i = 1; i <= limit; i++) {
    let count = i % 3 === 0 ? 'Fizz' : '';
    count = i % 5 === 0 ? count + 'Buzz' : count;
    console.log(count === '' ? i : count);
  }
}

fizzBuzz(20);
