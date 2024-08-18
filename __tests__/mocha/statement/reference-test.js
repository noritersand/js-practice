const assert = require('assert');
const {log} = console;

var obj = {a: 1}; // 0x3321234123

function fn(obj) {
  obj.b = 2;
}

fn(obj);

log(obj); // { a: 1, b: 2 }

describe('test how reference works in JavaScript', () => {
  it('should be pass', () => {
    assert.deepStrictEqual(obj, {a: 1, b: 2});
  });
});
