/*
  The DNA strand is missing the pairing element. 
  Take each character, get its pair, and return the results as a 2d array.
*/

function pairElement(str) {
  let pairs = [];
  
  const elements = str.split('');
  
  elements.forEach(element => {
    let pair;
    
    switch(element) {
      case 'A':
        pair = ['A', 'T'];
        break;
      case 'C':
        pair = ['C', 'G'];
        break;
      case 'G':
        pair = ['G', 'C'];
        break;
      case 'T':
        pair = ['T', 'A'];
        break;
      default: 
        return ['Error: Improper element'];
    }
    
    pairs.push(pair);
  });
  
  return pairs;
}

console.log(
  pairElement("GCG")
);
