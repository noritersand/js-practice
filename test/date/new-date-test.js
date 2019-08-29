// create instance by ISO format
console.debug(new Date('2011-12-30')); // valid
console.debug(new Date('2011/12/30')); // valid
console.debug(new Date('20111230')); // invalid date
console.debug(new Date('30-12-2011')); // invalid date
