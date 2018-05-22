/*
  Update current inventory array with new inventory.
  Update current inventory item qty or add item/qty.
  Return updated inventory array sorted by item. 
*/

function updateInventory(curInv, newInv) {
  let updated = false;

  newInv.forEach(newItem => {
    updated = false;

    curInv.forEach(curItem => {
      if (newItem[1] === curItem[1]) {
        curItem[0] += newItem[0];
        updated = true;
      }
    });

    if (!updated) {
      curInv.push(newItem);
    }
  });

  return curInv.sort(
    (a, b) => a[1] > b[1] ? 1 : -1
  );  
}

console.log(
  updateInventory(
    [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone']
    ],
    [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste']
    ]
  )
);
