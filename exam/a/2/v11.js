const assert = require('assert');
const { log } = console;

/**
 * 
 * @param {number} a
 */
function fn(a) {
  var answer = '';
  for (let i = 1; i <= a; ++i) {
    var odd = i % 2 == 1;
    answer += odd ? '수' : '박';
  }
  return answer;
}

describe('test suite', function() {
  it('exceptions', function() {
    assert.strictEqual(fn(0), '');
  });
  it('actual test', function() {
    assert.strictEqual(fn(1), '수');
    assert.strictEqual(fn(2), '수박');
    assert.strictEqual(fn(3), '수박수');
    assert.strictEqual(fn(4), '수박수박');
    assert.strictEqual(fn(5), '수박수박수');
  });
});

