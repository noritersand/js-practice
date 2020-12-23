var assert = require('assert');
var foo = 'bar';
describe('Mocha test', function() {
  it('should be pass', function() {
    assert.strictEqual(foo, 'bar');
  });
  it('should be fail', function() {
    assert.strictEqual(foo, 'E');
  });
});