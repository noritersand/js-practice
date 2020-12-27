const assert = require('assert');
const expect = require('chai').expect
const { log } = console;

/**
 * 
 * @param {number[]} a 
 * @param {number} b 
 */
function fn(a, b) {
  while (a.length) {
    // log('while: arr[0]:', arr[0]);
    if (a[0] == b) {
      return true; // false인가?
    }
    if (a.length < 2) {
      return false;
    }
    for (let i = 1; i < a.length; ++i) {
      // log('for: arr[i]', arr[i]);
      if (a[0] + a[i] == b) {
        log('더한 얘들:', a[0], a[i]);
        return true;
      }
    }
    a.splice(0, 1);
  }
}

describe('test suite', function() {
  // it('exceptions', function() {
  //   assert.ok(!false);
  // });
  it('#1', function() {
    assert.strictEqual(fn([5, 3, 9, 13], 8), true);
  });
  it('#2', function() {
    assert.strictEqual(fn([5, 3, 9, 13], 7), false);
  });
});

