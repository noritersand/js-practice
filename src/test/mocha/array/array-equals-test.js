const assert = require('assert');
const { log } = console;

var arr = [1, 2, 3];
var other = [1, 2, 3];
var another = [4, 5, 6];

describe('배열 동등 연산 테스트', function() {
  it('should be false', function() {
    assert.ok(arr != other);
    assert.ok(arr != another);
    assert.ok(other != another);
  });
});

// TODO
