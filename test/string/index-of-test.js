const assert = require('assert');
const { log } = console;

describe('test indexOf()', function() {
  it('should be pass', function() {
    assert.strictEqual('abcd'.indexOf('bc'), 1);
    assert.strictEqual('abcd'.indexOf('abc'), 0);
    assert.strictEqual('abcd'.indexOf('abcd'), 0);
    assert.strictEqual('abcd'.indexOf('ad'), -1);
    assert.strictEqual('abcd'.indexOf('gh'), -1);
  });
});