const assert = require('assert');
const { log } = console;

var foo = 'bar';

describe('Mocha test', function() {
  log('Hello world!');
  it('should be pass', function() {
    assert.strictEqual(foo, 'bar');
  });
  it('should be fail', function() {
    assert.strictEqual(foo, 'E');
  });
});