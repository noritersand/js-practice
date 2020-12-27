const assert = require('assert');
const { log } = console;

/**
 * 
 * @param {string} a 
 */
function fn(a) {
  var answer = '';
  var odd = a.length % 2 == 1;
  log(a, odd, odd ? 'a' : 'b');
  var start = odd ? Math.floor(a.length / 2) : a.length / 2 - 1;
  answer = a.substring(start, start + (odd ? 1 : 2));
  return answer;
}

describe('test suite', function() {
  it('test', function() {
    assert.strictEqual(fn('abcde'), 'c');
    assert.strictEqual(fn('qwe'), 'w');
    assert.strictEqual(fn('qwer'), 'we');
    assert.strictEqual(fn('qwerty'), 'er');
    assert.strictEqual(fn('qwertyuio'), 't');
    assert.strictEqual(fn('asd asd asd'), 's');
  });
});

