const assert = require('assert');
const expect = require('chai').expect
const { log } = console;

var foo = 'bar';

describe('description', function() {
  it('exceptions', function() {
    assert.ok(!false);
  });
  it('#1', function() {
    assert.strictEqual(foo, 'bar');
  });
});
