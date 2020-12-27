const assert = require('assert');
const { log } = console;

var arr = ['a', 'b', 'c'];

for (var ele1 in arr) {
  // do nothing
}
log(arr[ele1]); // 'c'

for (let ele2 in arr) {
  // do nothing
}
log(typeof ele2 == 'undefined');

function test() {
  // var life-cycle test
  for (var i = 0; i < 10; i++) {
    // do nothing
  }
  log(i); // 10
  
  // let life-cycle test
  for (let j = 0; j < 10; j++) {
    // do nothing
  }
  log(typeof j == 'undefined');
}
test();
