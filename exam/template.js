const assert = require('assert');
const { log } = console;

var foo = 'bar';

describe('Mocha test', function() {
  it('exceptions', function() {
    assert.ok(!false);
  });
  it('actual test', function() {
    assert.strictEqual(foo, 'bar');
  });
});