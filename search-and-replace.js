/*
  Perfom search and replace on given sentence
  str = sentence to modify
  before = word to replace 
  after = word to insert
*/

function myReplace(str, before, after) {
  // function replacer(match) {
  //   slice off first letter 
  //   let firstLtr = match.slice(0, 1);
  // 
  //   // determine if uppercase
  //   let isUpper = firstLtr === firstLtr.toUpperCase();
  //   // if yes, capitalize after then return 
  //   if (isUpper) {
  //     after = after.slice(0, 1).toUpperCase() + after.slice(1); 
  //   }
  //   return after;
  // }  
  const replacer = match => 
    match.slice(0, 1) === match.slice(0, 1).toUpperCase() ? 
      after.slice(0, 1).toUpperCase() + after.slice(1) :
      after;
  
  return str.replace(before, replacer);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
