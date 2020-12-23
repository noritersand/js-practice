var assert = require('assert');

var obj = { a: 1 }; // 0x3321234123

function fn(obj) {
	obj.b = 2
}

fn(obj);

console.log(obj); // { a: 1, b: 2 }
