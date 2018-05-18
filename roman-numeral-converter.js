/*
  Convert the given number into a roman numeral 
*/

function convertToRoman(num) {
  let decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  let romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  
  let romanized = '';

  decimalValue.forEach((cur, index) => {
    while (cur <= num) {
      romanized += romanNumeral[index];
      num -= cur;
    }
  });
  
  return romanized;
}

console.log(
  convertToRoman(36)
);