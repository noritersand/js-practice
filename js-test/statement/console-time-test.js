const assert = require('assert');
const { log } = console;

/**
 * console.time() test
 */
console.time('timer');
log('I\'m doing something');
console.timeEnd('timer'); 

