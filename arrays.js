"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
      console.log(items[i], i);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  let result = []

  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i])
    }
  }
  console.log(result)
}


// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a, b) => a-b);
  let n_items = items.slice(0,n);
  n_items.reverse();
  
  console.log(n_items);
}
