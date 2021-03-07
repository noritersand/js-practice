const { log } = console;

function invokeCallback(callback) {
  log(arguments.length);
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    log('i:', i, 'arguments[i]:', arguments[i])
    args.push(arguments[i]);
  }
  callback.apply(null, args);
}

invokeCallback(fn, 'PRE', 'AA');

function fn(mode, abc) {
  log('mode:', mode);
  log('abc:', abc);
}
