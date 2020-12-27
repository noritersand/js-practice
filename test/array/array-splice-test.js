const assert = require('assert');
const { log } = console;

var obj = [
  {
    userNumber: ''
  }, {
    userNumber: ''
  }, {
    userNumber: ''  
  }, {
    userNumber: ''
  }, {
    userNumber: ''
  }
];

for (var i = 0; i < obj.length; i++) {
  if (obj[i].userNumber == '') {
    obj.splice(i, 1);
    i--;
  }
}

describe('Array.splice test', function() {
  it('should be true', function() {
    assert.strictEqual(obj.length, 0);
  });
});
