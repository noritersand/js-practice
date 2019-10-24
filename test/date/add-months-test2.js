Date.getDaysInMonth = function(year, month) {
	return new Date(year, month, 0).getDate();
};
Date.prototype.getDaysInMonth = function() { 
	return Date.getDaysInMonth(this.getFullYear(), this.getMonth() + 1);
};
Date.prototype.addMonths = function(value) {
	var n = this.getDate();
	this.setDate(1);
	this.setMonth(this.getMonth() + value);
	this.setDate(Math.min(n, this.getDaysInMonth()));
	return this;
};

var now = new Date('2018-07-31T09:00:00.000+09:00');
console.log("한국 시간 2018년 7월 31일 09시로 설정: ");
console.log("toISOString():", now.toISOString());
console.log("toLocaleString():", now.toLocaleString());
now.addMonths(1);
console.log("+1 month:", now.toISOString());
now.addMonths(1);
console.log("+2 month:", now.toISOString());
now.addMonths(1);
console.log("+3 month:", now.toISOString());
now.addMonths(1);
console.log("+4 month:", now.toISOString());
now.addMonths(1);
console.log("+5 month:", now.toISOString());
now.addMonths(1);
console.log("+6 month:", now.toISOString());
now.addMonths(1);
console.log("+7 month:", now.toISOString());

var now = new Date('2018-07-31T09:00:00.000+09:00');
console.log("다시 한국 시간 2018년 7월 31일 09시로 설정: ");
console.log("toISOString():", now.toISOString());
console.log("toLocaleString():", now.toLocaleString());
now.addMonths(-1);
console.log("-1 month:", now.toISOString());
now.addMonths(-1);
console.log("-2 month:", now.toISOString());
now.addMonths(-1);
console.log("-3 month:", now.toISOString());
now.addMonths(-1);
console.log("-4 month:", now.toISOString());
now.addMonths(-1);
console.log("-5 month:", now.toISOString());
now.addMonths(-1);
console.log("-6 month:", now.toISOString());
now.addMonths(-1);
console.log("-7 month:", now.toISOString());
