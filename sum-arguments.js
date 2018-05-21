/*
  Return sum of two arguments, or function with one argument 
  that returns sum
*/

function addTogether() {
  const args = [...arguments];

  const notNumber = x => typeof x !== 'number';

  if (args.length == 1) {
    let a = args[0];

    if (notNumber(a)) {
      return undefined;
    } else {
      return function(b) {
        if (notNumber(b)) {
          return undefined;
        } else {
          return a + b;
        }
      };
    }
  } else if (args.length === 2) {
    if (notNumber(args[0]) || notNumber(args[1])) {
      return undefined;
    }
    return args[0] + args[1];
  }
}

console.log(addTogether(2, 56));
