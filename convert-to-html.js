/*
  Convert the characters &, <, >, ", ' in a string to 
  their corresponding HTML entities.
*/

function convertHTML(str) {
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

console.log(
  convertHTML("Dolce & Gabbana")
);
