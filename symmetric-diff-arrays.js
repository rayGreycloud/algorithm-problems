/*
  Return array of symmetric diff of provided arrays
*/

function sym() {
  let args = [...arguments];

  const getSymDiff = (arr1, arr2) => {
    let diff = [];

    const itemCheck = (arrA, arrB) => {
      arrA.forEach(item => {
        if (arrB.indexOf(item) === -1 && diff.indexOf(item) === -1) {
          diff.push(item);
        }
      });
    };

    itemCheck(arr1, arr2);
    itemCheck(arr2, arr1);

    return diff;
  };

  return args.reduce(getSymDiff);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
