// Convert a string to spinal case. 
// Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  
  return str
    .replace(
      /[A-Z]/g, 
      (match, offset, string) => 
        (offset > 0 ? '-' : '') + match
    )
    .replace(
      /\s+|_+/g, 
      (match, offset, string) => 
        string[offset + 1] === '-' ? '' : '-'
    )
    .toLowerCase();
}

console.log(
  spinalCase('This Is Spinal Tap')
);
