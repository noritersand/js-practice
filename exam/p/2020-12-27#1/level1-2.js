const assert = require('assert');
const { log } = console;

/**
 * 
 * @param {string[]} participant 참가자 배열
 * @param {string[]} completion 완주자 배열
 */
function solution(participant, completion) {
  let answer = [...participant];
  for (let i of completion) { 
    log(answer.indexOf(i));
    answer.splice(answer.indexOf(i), 1);
  }
  log(answer);
  return answer[0];
}

describe('test suite', function() {
  it('test', function() {
    assert.strictEqual(solution(["leo", "kiki", "eden"], ["eden", "kiki"]), "leo");
    assert.strictEqual(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]), 'vinko');
    assert.strictEqual(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]), 'mislav');
  });
});

