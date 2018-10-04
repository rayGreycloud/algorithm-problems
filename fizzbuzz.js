// Original version
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

// New version
function fizzBuzz(limit) {
  for (i = 1; i <= limit; i++) {
    let count = '';
    count = i % 3 === 0 ? count + 'Fizz' : count;
    count = i % 5 === 0 ? count + 'Buzz' : count;
    console.log(count === '' ? i : count);
  }
}

fizzBuzz(10);
