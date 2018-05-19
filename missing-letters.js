/*
Find the missing letter in the passed letter range and return it.
*/

function fearNotLetter(str) {
  const first = str.charCodeAt(0);
  const last = str.charCodeAt(str.length - 1);
  
  for (let i = first + 1; i < last; i++) {
    if (str.indexOf(String.fromCharCode(i)) === -1) {
      return String.fromCharCode(i);
    }
  }  

  return undefined;
}

console.log(
  fearNotLetter("abce")
);
