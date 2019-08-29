var obj = [
	{
		userNumber: ''
	}, {
		userNumber: ''
	}, {
		userNumber: ''  
	}, {
		userNumber: ''
	}, {
		userNumber: ''
	}
];

for (var i = 0; i < obj.length; i++) {
	if (obj[i].userNumber == '') {
		obj.splice(i, 1);
		i--;
	}
}
console.assert(0 == obj.length);
