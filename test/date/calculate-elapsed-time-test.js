var assert = require('assert');

// test#1
var start = new Date('2016-01-01');
var end = new Date('2016-01-03');
var elapsedtime = end - start;
console.assert(elapsedtime == end.getTime() - start.getTime());
console.assert(172800000 == elapsedtime);
console.assert(0 == new Date(elapsedtime).getMonth());
console.assert(3 == new Date(elapsedtime).getDate());

// test#2
start = new Date('2016-01-01');
end = new Date('2016-02-04');
elapsedtime = end - start;
console.assert(1 == new Date(elapsedtime).getMonth());
console.assert(4 == new Date(elapsedtime).getDate());

// test#3
start = new Date('2016-02-01');
end = new Date('2016-02-04');
elapsedtime = end - start;

// remove minutes from the date
console.log('elapsed day#1:', Math.floor(elapsedtime / 1000 / 60 / 60 / 24));
console.log('elapsed day#2:', elapsedtime / 1000 / 60 / 60 / 24);
