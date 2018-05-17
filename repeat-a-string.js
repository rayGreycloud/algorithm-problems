/* 
  Repeat a given string (first argument) num times (second argument). 
  Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  let result = '';
  
  if (num > 0) { 
    for (let i = 1; i <= num; i++) {
      result = result + str;  
    }
  } 
  
  return result;
}

console.log(
repeatStringNumTimes("abc", 3)
);
