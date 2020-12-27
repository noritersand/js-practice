const assert = require('assert');
const expect = require('chai').expect
const { log } = console;

/**
 * 
 * @param {number} a 
 */
function fn(a) {
  var answer = 0;
  let squareRoot = Math.sqrt(a);
  if (Number.isInteger(squareRoot)) {
    squareRoot++;
    answer = squareRoot * squareRoot;
  } else {
    answer = -1;
  }
  return answer;
}

describe('test suite', function() {
  it('exceptions', function() {
    assert.ok(!false);
  });
  it('#1', function() {
    assert.strictEqual(fn(121), 144);
  });
  it('#2', function() {
    assert.strictEqual(fn(3), -1);
  });
});