/* Given a string, return true if it is a palindrome, otherwise return false */

function palindrome(str) {
  let re = /[^A-Z0-9]+/ig;
  let cleanedStr = str.replace(re, '');
  let loweredStr = cleanedStr.toLowerCase();
  let reversedStr = loweredStr
    .split('')
    .reverse()
    .join('');

  return loweredStr === reversedStr;
}

// Test code
const testCases = [
  ['eye', true],
  ['_eye', true],
  ['race car', true],
  ['not a palindrome', false],
  ['A man, a plan, a canal. Panama', true],
  ['never odd or even', true],
  ['nope', false],
  ['almostomla', false],
  ['My age is 0, 0 si ega ym.', true],
  ['0_0 (: /-\ :) 0-0', true],
  ['five|\_/|four', false]
];

console.log(palindrome(testCases[9][0]));

for (testCase of testCases) {
  const result = palindrome(testCase[0]);

  const passed = result === testCase[1] ? ' TEST PASSED' : ` TEST FAILED - should return ${testCase}`;

  console.log(`Test Case: ${testCase[0]} ${passed}`);
}

