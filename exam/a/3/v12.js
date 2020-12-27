const assert = require('assert');
const expect = require('chai').expect
const { log } = console;

/**
 * @param {number} a 
 * @param {number[]} b 
 * @param {number[]} c 
 */
function fn(a, b, c) {
  var answer = 0;

  // if (lost.length < reserve.length) {
  //   answer = n;
  // } else if (lost.length == reserve.length) {
  //   answer = n - 1;
  // } else {
  //   answer = n - (lost.length - reserve.length);
  // }
  let lostArr = [ ...b ];
  let empty = false;
  for (let i of c) {
    // log('i:', i);
    let index = lostArr.indexOf(i + 1);
    if (index == -1) {
      index = lostArr.indexOf(i - 1);
      if (index == -1) {
        continue;
      }
    }
    // log('find:', i);
    // log('index:', index);
    lostArr.splice(index, 1);
    // log('lostArr:', lostArr);
    if (lostArr.length == 0) {
      empty = true;
      // log('empty');
    }
  }
  
  answer = empty ? a : a - lostArr.length;
  return answer;
}

describe('test suite', function() {
  it('exceptions', function() {
    assert.ok(!false);
  });
  it('#1', function() {
    assert.strictEqual(fn(5, [2, 4], [1, 3, 5]), 5);
  });
  it('#2', function() {
    assert.strictEqual(fn(5, [2, 4], [3]), 4);
  });
  it('#3', function() {
    assert.strictEqual(fn(3, [3], [1]), 2);
  });
  it('#4', function() {
    assert.strictEqual(fn(3, [3], [2]), 3);
  });
  it('#5', function() {
    assert.strictEqual(fn(3, [3], [3]), 2);
  });
});