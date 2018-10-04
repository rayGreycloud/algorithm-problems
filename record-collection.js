/*
  Update json collection item with given prop/value, return collection object. 
*/

// Setup
var collection = {
  '2548': {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  '2468': {
    album: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  '1245': {
    artist: 'Robert Palmer',
    tracks: [],
  },
  '5439': {
    album: 'ABBA Gold',
  },
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  // 'tracks' with a value
  if (prop === 'tracks' && value !== '') {
    collection[id]['tracks']
      ? collection[id]['tracks'].push(value)
      : (collection[id][prop] = [value]);
    // other props with a value
  } else {
    value !== ''
      ? (collection[id][prop] = value)
      : // any prop with value = ''
        delete collection[id][prop];
  }

  return collection;
}
// function updateRecords(id, prop, value) {
//   // 'tracks' with a value
//   if (prop === 'tracks' && value !== '') {
//     if (collection[id]['tracks']) {
//       collection[id]['tracks'].push(value);
//     } else {
//       collection[id][prop] = [value];
//     }
//   // other props with a value
//   } else if (value !== '') {
//     collection[id][prop] = value;
//   // any prop with value = ''
//   } else {
//     delete collection[id][prop];
//   }

//   return collection;
// }

console.log(
  // updateRecords(5439, "tracks", "Take a Chance on Me")
  // updateRecords(1245, "tracks", "Addicted to Love")
  updateRecords(2468, 'tracks', 'Free')
);
