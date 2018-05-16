/* Return the factorial of the given integer */

function factorialize(num) {
  let factorial = 1;

  if (num === 0 || num === 1) {
    return factorial;
  }

  for (let i = 2; i <= num; i++) {
    factorial = factorial * i;
  }

  return factorial;
}

// Test code
const testCases = [5, 10, 20, 0];
const expectedResults = [120, 3628800, 2432902008176640000];
const testIndex = 2;

const result = factorialize(testCases[testIndex]);

const passed =
  result === expectedResults[testIndex] ? 'TEST PASSED -' : 'TEST FAILED -';

console.log(`${passed} Test Case: ${testCases[testIndex]} Result: ${result}`);
