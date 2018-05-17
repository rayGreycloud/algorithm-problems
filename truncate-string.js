/*
Truncate a string (first argument) if it is longer than 
the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  
  const length = num > 3 ? num - 3 : num;
  const truncatedStr = str.substr(0, length);

  return `${truncatedStr}...`;
}

console.log(
  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
);
