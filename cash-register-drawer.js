/*
  Design a cash register drawer function that accepts 
  price, cash, and cid (cash-in-drawer) as arguments.
  Return "Insufficient Funds" if cid > change due. 
  Return "Closed" if cid = change due.
  Otherwise, return change sorted in highest to lowest.

  Example cash-in-drawer array:
  [["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00]]  
*/

const denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
  let amtDue = cash - price;

  let drawer = cid.reduce((acc, cur) => {
    acc.total += cur[1];
    acc[cur[0]] = cur[1];
    return acc;
  }, { total: 0 });

  if (drawer.total < amtDue) {
    return 'Insufficient Funds';  
  } else if (drawer.total === amtDue) {
    return 'Closed';
  }
  
  let change = denom.reduce((acc, cur) => {
    let value = 0;
  
    while (drawer[cur.name] > 0 && amtDue >= cur.val) {
      amtDue -= cur.val;
      amtDue = Math.round(amtDue * 100) / 100;
      
      drawer[cur.name] -= cur.val;
      value += cur.val;
    }
    
    if (value > 0) {
      
      acc.push([cur.name, value * 100 / 100]);
    }
    
    return acc;
  }, []);
  
  if (change.length < 1 || amtDue > 0) {
    return 'Insufficient Funds';
  }
  // Here is your change, ma'am.
  return change;
}

console.log(
checkCashRegister(
  19.50, 
  20.00, 
  [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]
));


