/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  let all = {};
  for (let i = 0; i < transactions.length; i++){
    let txn = transactions[i];
    if (!all.hasOwnProperty(txn.category)){
      all[txn.category] = txn.price;
      continue;
    }
    all[txn.category] += txn.price;
  }

  let arr = [];
  let keys = Object.keys(all);

  for (let i = 0; i < keys.length; i++){
    let obj = {
      category: keys[i],
      totalSpent: all[keys[i]]
    }
    arr.push(obj);
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
