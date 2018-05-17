/* Given a sentence (string), return the length of the longest word */

function findLongestWord(str) {
  // Initialize result variable
  let longest = 0; 
  // Split sentence into array of words
  const words = str.split(' ');
  // Map array and compare each word to longest
  words.map(word => {
    longest = word.length > longest ? word.length : longest;
  });

  return longest;  
}

const answer = findLongestWord("The quick brown fox jumped over the lazy dog");

console.log(`Longest word length: ${answer}`);

