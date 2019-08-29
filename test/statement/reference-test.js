var obj = { a: 1 }; // 0x3321234123

function fn(obj) {
	obj.b = 2
}

fn(obj);

console.debug(obj); // { a: 1, b: 2 }
