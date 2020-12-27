const assert = require('assert');
const { log } = console;

/**
 * 
 * @param {number} n 
 */
function solution(n) {
  var answer = '';
  for (let i = 1; i <= n; ++i) {
    var odd = i % 2 == 1;
    answer += odd ? '수' : '박';
  }
  return answer;
}

describe('test suite', function() {
  it('exceptions', function() {
    assert.strictEqual(solution(0), '');
  });
  it('actual test', function() {
    assert.strictEqual(solution(1), '수');
    assert.strictEqual(solution(2), '수박');
    assert.strictEqual(solution(3), '수박수');
    assert.strictEqual(solution(4), '수박수박');
    assert.strictEqual(solution(5), '수박수박수');
  });
});

