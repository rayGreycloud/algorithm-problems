/*
  Return true if string is valid phone number
*/

function telephoneCheck(str) {
  let phoneRe = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

console.log(telephoneCheck('555-555-5555'));
