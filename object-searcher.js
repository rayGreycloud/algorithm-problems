/*
  Make a function that looks through an array of objects 
  (first argument) and returns an array of all objects that
  have matching property and value pairs (second argument). 
*/

function whatIsInAName(collection, source) {
  // Get source props 
  let srcKeys = Object.keys(source);
  
  // Filter collection 
  const results = collection.filter(item => {
    // Check item has every source prop with equal value 
    // If not, returns false which filters item from results
    return srcKeys.every(key => item.hasOwnProperty(key) && item[key] === source[key]);
  });
  
  // Return array of matching objects
  return results;
}

console.log(
  whatIsInAName(
    [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
    { last: "Capulet" }
  )
);
