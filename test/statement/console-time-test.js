const assert = require('assert');
const { log } = console;

/**
 * console.time() test
 */
console.time('timer');
log('do something');
console.timeEnd('timer'); 
