const assert = require('assert');
const { log } = console;


function solution(n, arr1, arr2) {
  var answer = [];

  return answer;
}

describe('test suite', function() {
  it('exceptions', function() {
    assert.strictEqual(solution(0), '');
  });
  it('actual test', function() {
    assert.strictEqual(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]), ["#####","# # #", "### #", "# ##", "#####"]);
    assert.strictEqual(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]), ["######", "### #", "## ##", " #### ", " #####", "### # "]);
  });
});

