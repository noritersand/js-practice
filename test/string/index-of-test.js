const assert = require('assert');
const { log } = console;

log(1 == 'abcd'.indexOf('bc'));
log(0 == 'abcd'.indexOf('abc'));
log(0 == 'abcd'.indexOf('abcd'));
log(-1 == 'abcd'.indexOf('ad'));
