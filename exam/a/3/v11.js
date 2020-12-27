const assert = require('assert');
const expect = require('chai').expect
const { log } = console;

/**
 * @param {number} a 
 */
function fn(a) {
  if (!Number.isInteger(a)) {
    return 'fail';
  }
  var answer = ((a < 0 ? Math.abs(a) : a) % 2 == 1) ? 'Odd' : 'Even';
  return answer;
}


describe('test suite', function() {
  it('exceptions', function() {
    assert.strictEqual(fn(1.1), 'fail');
  });
  it('actual test', function() {
    assert.strictEqual(fn(0), 'Even');
    assert.strictEqual(fn(2), 'Even');
    assert.strictEqual(fn(4), 'Even');
    assert.strictEqual(fn(6), 'Even');
    assert.strictEqual(fn(8), 'Even');
    assert.strictEqual(fn(10), 'Even');
    assert.strictEqual(fn(-10), 'Even');

    assert.strictEqual(fn(3), 'Odd');
    assert.strictEqual(fn(5), 'Odd');
    assert.strictEqual(fn(1), 'Odd');
    assert.strictEqual(fn(7), 'Odd');
    assert.strictEqual(fn(9), 'Odd');
    assert.strictEqual(fn(11), 'Odd');
    assert.strictEqual(fn(13), 'Odd');
    assert.strictEqual(fn(-13), 'Odd');
  });
});