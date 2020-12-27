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
  it('should be pass', function() {
    assert.ok(true);
    assert.ok(!false);
  });
  describe('test strictEqual', function() {
    it('should be pass', function() {
      assert.strictEqual(true, true);
      assert.strictEqual(false, false);
      
      assert.strictEqual(undefined, undefined);
      assert.strictEqual(null, null);

      assert.strictEqual('a', 'a');
      assert.strictEqual('', '');
      assert.strictEqual(' ', ' ');
      
      assert.strictEqual(1, 1);
      assert.strictEqual(1.2, 1.2);
      assert.strictEqual(-3, -3);
      assert.strictEqual(Infinity, Infinity);
      assert.strictEqual(-Infinity, -Infinity);

      assert.strictEqual(NaN, NaN);
    });
    it('should be fail', function() {
      assert.strictEqual(new Date('2020-12-27'), new Date('2020-12-27'));
    });
    it('should be fail', function() {
      assert.strictEqual(function() {}, function() {});
    });
    it('should be fail', function() {
      assert.strictEqual({}, {});
    });
    it('should be fail', function() {
      assert.strictEqual({a:1}, {a:1});
    });
    it('should be fail', function() {
      assert.strictEqual([], []);
    });
    it('should be fail', function() {
      assert.strictEqual([1, 2, 3], [1, 2, 3]);
    });
    it('should be fail', function() {
      assert.strictEqual([1, 2, 3], [4, 5, 6]);
    });
  });
});
