/*
  Write a function which takes a ROT13 encoded string as input and
  returns a decoded string. (ROT13 = letters shifted 13 places)
*/

function rot13(str) { // LBH QVQ VG!  
  // Split into array 
  const chars = str.split('');
  console.log(chars)
  // map through array 
  const charCodes = chars.map(char => {
    const code = char.charCodeAt();
    
    if (char.match(/[a-z]/i)) {
      return code > 77 ? (13 - (90 - code) + 64) : code + 13;
    } else {
      return code;
    }
  });
      
  // Rejoin characters and return   
  return String.fromCharCode(...charCodes);
}

console.log(
  rot13("SERR PBQR PNZC")
);
