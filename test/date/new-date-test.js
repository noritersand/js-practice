var assert = require('assert');

// create instance by ISO format
console.log(new Date('2011-12-30')); // valid
console.log(new Date('2011/12/30')); // valid
console.log(new Date('20111230')); // invalid date
console.log(new Date('30-12-2011')); // invalid date
