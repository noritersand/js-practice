import assert from 'assert';
import {expect} from 'chai';
import {log} from 'console';

var foo = 'bar';

describe('description', () => {
  it('exceptions', () => {
    assert.ok(!false);
  });
  it('#1', () => {
    assert.strictEqual(foo, 'bar');
  });
});
