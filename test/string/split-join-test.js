const assert = require('assert');
const expect = require('chai').expect
const { log } = console;

let str = 'a.b.c|d.e.f|g.h.i';
let divided = str.split('|');

describe('test String.split()', function() {
  it('should be pass', function() {
    // assert.strictEqual(divided, expected);
    assert.deepStrictEqual(divided, ['a.b.c', 'd.e.f', 'g.h.i']); // deepStrictEqual은 배열 비교가 안됨
  });
});
