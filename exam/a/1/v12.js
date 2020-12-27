const assert = require('assert');
const { log } = console;

/**
 * 
 * @param {string[]} a
 * @param {string[]} b
 */
function fn(a, b) {
  let answer = [...a];
  for (let i of b) { 
    // log(answer.indexOf(i));
    answer.splice(answer.indexOf(i), 1);
  }
  // log(answer);
  return answer[0];
}

describe('test suite', function() {
  it('test', function() {
    assert.strictEqual(fn(["leo", "kiki", "eden"], ["eden", "kiki"]), "leo");
    assert.strictEqual(fn(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]), 'vinko');
    assert.strictEqual(fn(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]), 'mislav');
  });
});

