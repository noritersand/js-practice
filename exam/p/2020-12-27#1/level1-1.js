const assert = require('assert');
const { log } = console;

/**
 * 
 * @param {string} s 
 */
function solution(s) {
  var answer = '';
  var odd = s.length % 2 == 1;
  log(s, odd, odd ? 'a' : 'b');
  var start = odd ? Math.floor(s.length / 2) : s.length / 2 - 1;
  answer = s.substring(start, start + (odd ? 1 : 2));
  return answer;
}

describe('test suite', function() {
  it('test', function() {
    assert.strictEqual(solution('abcde'), 'c');
    assert.strictEqual(solution('qwe'), 'w');
    assert.strictEqual(solution('qwer'), 'we');
    assert.strictEqual(solution('qwerty'), 'er');
    assert.strictEqual(solution('qwertyuio'), 't');
    assert.strictEqual(solution('asd asd asd'), 's');
  });
});

