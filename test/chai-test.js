var expect = require('chai').expect
const { log } = console;

var foo = 'bar';

describe('Chai test', function() {
  it('should be pass', function() {
    expect([1, 2]).deep.to.equal([1, 2]);
  });
  it('should be fail', function() {
    expect([1, 2]).deep.to.equal([1, 2, 3]);
  });
});
