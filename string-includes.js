/*
Return true if the string in the first element of the array contains
 all of the letters of the string in the second element of the array.
*/

function mutation(arr) {
  let result = true;
  const firstStr = arr[0].toLowerCase();
  const secondStrLetters = arr[1].toLowerCase().split('');
  
  secondStrLetters.map(letter => {
    if (firstStr.indexOf(letter) == -1) {
      result = false;
    }
  });
  
  return result;
}

console.log(
mutation(["hello", "hey"])
);
