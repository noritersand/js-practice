const assert = require('assert');

const { log } = console;

function invokeCallback(callback) {
  // log(arguments.length);
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    // log('i:', i, 'arguments[i]:', arguments[i])
    args.push(arguments[i]);
  }
  return callback.apply(null, args);
}

function fn(mode, abc) {
  return { mode, abc };
}

describe('arguments test suite', function() {
  it('should be pass', function() {
    var o = invokeCallback(fn, 'PRE', 'AA');
    assert.strictEqual(o.mode, 'PRE');
    assert.strictEqual(o.abc, 'AA');
  });
});
