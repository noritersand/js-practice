const assert = require('assert');
const { log } = console;

var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
for (let ele of arr) {
  log(ele); // 'a', 'b', 'c', 'd', 'e', 'f', 'g'
}
for (let ele in arr) {
  log(ele); // 0, 1, 2, 3, 4, 5, 6, 7
}

var obj = {
  a: 1, b: 2, c: 3, d: 4, e: 5
}
// for (let ele of obj) {} // TypeError: obj is not iterable
