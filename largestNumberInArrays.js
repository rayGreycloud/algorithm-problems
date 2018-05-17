/* Return an array consisting of the largest number 
 from each provided sub-array. */
 
function largestOfFour(arr) {
  // Initialize results array
  let largest = [];
  // Iterate thru array
  arr.map(subArr => {
    // Get largest number from each sub-array
    const largestNum = subArr.reduce((acc, num) => {
      return acc < num ? num : acc;
    });
    // Push to results array
    largest.push(largestNum);
  })

  // return largest array
  return largest;      
 }
 
 const testArr = [
   [4, 5, 1, 3], 
   [13, 27, 18, 26], 
   [32, 35, 37, 39], 
   [1000, 1001, 857, 1]
 ];
 
 console.log(
   largestOfFour(testArr)
 );
 