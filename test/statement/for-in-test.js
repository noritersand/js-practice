const assert = require('assert');
const { log } = console;

var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
for (var i in arr) {
  log('index:', i, ', element:', arr[i]);
}
