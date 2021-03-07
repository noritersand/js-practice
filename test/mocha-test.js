const assert = require('assert');
const { log } = console;

var foo = 'bar';

describe('Mocha test', function() {
  log('Hello world!');
  
  it('should be pass', function() {
    assert.strictEqual(foo, 'bar'); // 오른쪽이 기대값임.
  });
  // it('should be fail', function() {
  //   assert.strictEqual(foo, 'E');
  // });
  it('should be pass', function() {
    assert.ok(true);
    assert.ok(!false);
  });
  describe('test strictEqual()', function() {
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
  });
  describe('test notStrictEqual', function() {
    it('should be pass', function() {
      assert.notStrictEqual(new Date('2020-12-27'), new Date('2020-12-27'));
      assert.notStrictEqual(function() {}, function() {});
      assert.notStrictEqual({}, {});
      assert.notStrictEqual({a:1}, {a:1});
      assert.notStrictEqual([], []);
      assert.notStrictEqual([1, 2, 3], [1, 2, 3]);
      // 객체와 배열 비교는 strictEqual이 아니라 deepStrictEqual로 한다.
      assert.deepStrictEqual({}, {});
      assert.deepStrictEqual({a:1}, {a:1});
      assert.deepStrictEqual(new Date('2020-12-27'), new Date('2020-12-27'));
      assert.notDeepStrictEqual(function() {}, function() {}); // 함수는 요딴식으로 비교할 수 음슴
      assert.deepStrictEqual([], []);
      assert.deepStrictEqual([1, 2, 3], [1, 2, 3]);
      assert.deepStrictEqual([4, 5, 6], [4, 5, 6]);
    });
  });
});
