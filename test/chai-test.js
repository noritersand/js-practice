const expect = require('chai').expect
const { log } = console;

var foo = 'bar';

describe('Chai test', function() {
  log('hello chai!');
  it('should be pass', function() {
    expect([1, 2]).deep.to.equal([1, 2]);
    expect({ a: 1 }).deep.to.equal({ a: 1 });
    expect({ a: { b: 2 } }).deep.to.equal({ a: { b: 2 } });
  });
  // it('should be fail', function() {
  //   expect([1, 2]).deep.to.equal([1, 2, 3]);
  // });
});
