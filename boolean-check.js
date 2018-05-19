/*
Check if a value is classified as a boolean primitive. Return true or false.
*/

// function booWho(bool) {
// 
//   return (bool === Boolean(bool));
// }

const booWho = bool => bool === Boolean(bool);

console.log(
  booWho(null)
);
