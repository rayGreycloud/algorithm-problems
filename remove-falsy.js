/*
  Remove all falsy values from an array.
*/

function bouncer(arr) {
  return arr.filter(item => Boolean(item))
}

console.log(
  bouncer([7, "ate", "", false, 9])
);
