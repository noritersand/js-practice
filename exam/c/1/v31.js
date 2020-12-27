const assert = require('assert');
const expect = require('chai').expect
const { log } = console;

/**
 * 
 * @param {number[]} a 
 * @param {number} b 
 */
function fn(a, b){
  let lowestCnt = a.length;
  while (a.length) {
    // log('while: A[0]:', A[0]);
    let acc = a[0];
    for (let i = 1; i < a.length; ++i) {
      // log('for: i:', i, 'A[i]:', A[i]);
      acc += a[i];
      if (acc >= b) {
        // log('for: acc:', acc);
        lowestCnt = (i + 1) < lowestCnt ? i + 1 : lowestCnt;
        // log('for: lowestCnt:', lowestCnt);
        break;
      }
    }
    a.splice(0, 1);
  }
  return lowestCnt;
}

describe('test suite', function() {
  // it('exceptions', function() {
  //   assert.ok(!false);
  // });
  it('#1', function() {
    assert.strictEqual(fn([1,10,2,9,3,8,4,7,5,6], 20), 3);
  });
});
