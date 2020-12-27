const assert = require('assert');
const { log } = console;

var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// log('before:', arr);

for (var ele in arr) {
  // log('- [first] ele:', ele, ', arr[ele]:', arr[ele]);
  if (ele == 2 || ele == 3 || ele == 5) {
    arr.splice(ele, 1);
  }
  // log('- [last] ele:', ele, ', arr[ele]:', arr[ele]);
}

describe('Array splice test2', function() {
  it('should be true', function() {
    assert.strictEqual(arr.join(','), 'a,b,d,f,g');
  });
})
