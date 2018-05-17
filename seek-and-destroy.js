/*
  Remove all elements from first array that are same as other arguments
*/

function destroyer(arr) {
  let args = [...arguments];
  let firstArr = args[0];
  let targets = args.slice(1);
  
  targets.map(target => {
    firstArr = firstArr.filter(el => el !== target);
  })

  return firstArr;
}

console.log(
  destroyer([1, 2, 3, 1, 2, 3], 2, 3)
);
