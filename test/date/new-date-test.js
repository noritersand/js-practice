const assert = require('assert');
const { log } = console;

// create instance by ISO format
log(new Date('2011-12-30')); // valid
log(new Date('2011/12/30')); // valid
log(new Date('20111230')); // invalid date
log(new Date('30-12-2011')); // invalid date
