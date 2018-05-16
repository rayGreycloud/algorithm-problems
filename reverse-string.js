/* Given a string, reverse the characters of the strings and output the reversed string */

function reverseString(str) {
  const letters = str.split('');
  const reversedLetters = letters.reverse();
  const reversedStr = reversedLetters.join('');

  return reversedStr;
}

// Test code
const testStrings = ['hello', 'Howdy', 'Greetings from Earth'];
const resultStrings = ['olleh', 'ydwoH', 'htraE morf sgniteerG'];
const testIndex = 2;

const result = reverseString(testStrings[testIndex]);

const passed =
  result === resultStrings[testIndex] ? 'TEST PASSED -' : 'TEST FAILED -';

console.log(`${passed} String: ${testStrings[testIndex]} Result: ${result}`);
