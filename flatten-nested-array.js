

function steamrollArray(arr) {
  let array = [];

  while (arr.length) {
    let value = arr.shift();
    if (Array.isArray(value)) {
      arr = value.concat(arr);
    } else {
      array.push(value);
    }     
  }
  return array;
}

console.log(
  steamrollArray([1, [2], [3, [[4]]]])
);