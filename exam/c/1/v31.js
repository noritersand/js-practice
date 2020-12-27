const assert = require('assert');
const expect = require('chai').expect
const { log } = console;



describe('text suite', function() {
  it('exceptions', function() {
    assert.ok(!false);
  });
  it('actual test', function() {
    assert.strictEqual(foo, 'bar');
  });
});