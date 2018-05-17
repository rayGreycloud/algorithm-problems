/* Return given string with first letter of each word 
  capitalized and rest of work in lowercase */
  
function titleCase(str) {
  // Split sentence into word array 
  const words = str.split(' ');

  // Process each word 
  const newWords = words.map(word => 
    word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
  );
  
  // Re-join words and return
  return newWords.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
