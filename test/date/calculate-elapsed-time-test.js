const assert = require('assert');
const { log } = console;

// test#1
var start = new Date('2016-01-01');
var end = new Date('2016-01-03');
var elapsedtime = end - start;
log(elapsedtime == end.getTime() - start.getTime());
log(172800000 == elapsedtime);
log(0 == new Date(elapsedtime).getMonth());
log(3 == new Date(elapsedtime).getDate());

// test#2
start = new Date('2016-01-01');
end = new Date('2016-02-04');
elapsedtime = end - start;
log(1 == new Date(elapsedtime).getMonth());
log(4 == new Date(elapsedtime).getDate());

// test#3
start = new Date('2016-02-01');
end = new Date('2016-02-04');
elapsedtime = end - start;

// remove minutes from the date
log('elapsed day#1:', Math.floor(elapsedtime / 1000 / 60 / 60 / 24));
log('elapsed day#2:', elapsedtime / 1000 / 60 / 60 / 24);
