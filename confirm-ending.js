/* Check if a string (first argument, str) ends with the given 
target string (second argument, target). Do not use .endsWith() */

function confirmEnding(str, target) {
  const ending = str.substr(-target.length);
  
  return ending === target;
}

console.log(
  confirmEnding("He has to give me a new name", "name")
); // true
