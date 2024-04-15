const assert = require('assert');
const expect = require('chai').expect;
const {log} = console;

var foo = 'bar';

describe('description', () => {
  it('exceptions', () => {
    assert.ok(!false);
  });
  it('#1', () => {
    assert.strictEqual(foo, 'bar');
  });
});
