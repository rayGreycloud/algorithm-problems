/*
 Take two or more arrays and returns a new array of unique values in the order of the original provided arrays.
*/

function uniteUnique(arr) {
  let newArray;
  let arrays = [...arguments];
  
  newArray = arrays.reduce(
    (acc, cur) => {
      return acc.concat(
        cur.filter(num => acc.indexOf(num) === -1)
      )
    }  
  );
  
  return newArray;
}

console.log(
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
);
