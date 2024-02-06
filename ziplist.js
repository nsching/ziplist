// attempt 1, finished in 22 mins and 56 seconds
function zipList (list1, list2) {
  let final = [];
  if (list1.length === list2.length) {
    for(let i = 0; i < list1.length; i++) {
      final.push(list1[i]);
      final.push(list2[i]);
    }
  }
  else {
    return "List length is not the same";
  }
  return final;
}

const _ = require('lodash');
function zipListTheSimpleWay (list1, list2) {
  return _.zip(list1, list2);
}

let list1 = ['a', 'b', 'c'];
let list2 = [1, 2, 3];

console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));