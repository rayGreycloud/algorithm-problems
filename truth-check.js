/*
  Check if given property is truthy on all elements of collection
*/

function truthCheck(collection, prop) {
  
  for (element of collection) {
    if (!element[prop]) {
      return false;
    }
  }
  
  return true;
}

console.log(
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
);