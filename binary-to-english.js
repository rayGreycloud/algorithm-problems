/*
  Translate binary string into english
*/

function binaryAgent(str) {
  // Convert str to array of binary strings
  const binaryNumbers = str.split(' ');
  
  // const translated = binaryNumbers.reduce(function (acc, cur) {
  //   let binaryNumber = parseInt(cur, 2);
  //   let char = String.fromCharCode(binaryNumber);
  // 
  //   return acc + char;
  // }, '');
  // 
  // return translated;
  
  return binaryNumbers.reduce((acc, cur) => 
    acc + String.fromCharCode(parseInt(cur, 2)),
    ''
  );
}

console.log(
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
);
