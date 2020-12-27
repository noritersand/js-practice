const assert = require('assert');
const expect = require('chai').expect
const { log } = console;

/**
 * 
 * @param {number[]} a 
 * @param {number[]} b 
 */
function fn(a, b) {
  var answer = 0;
  if (a.length !== b.length) {
    return 'fail';
  }
  for (let i = 0; i < a.length; ++i) {
    answer += a[i] * b[i];
  }
  return answer;
}

describe('test suite', function() {
  it('exceptions', function() {
    assert.strictEqual(fn([1], [1, 2]), 'fail');
  });
  it('#1', function() {
    assert.strictEqual(fn([1,2,3,4], [-3,-1,0,2]), 3);
  });
  it('#2', function() {
    assert.strictEqual(fn([-1,0,1], [1,0,-1]), -2);
  });
});