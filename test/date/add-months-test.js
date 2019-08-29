// 소스 출처: https://stackoverflow.com/questions/5645058/how-to-add-months-to-a-date-in-javascript
Date.isLeapYear = function(year) { 
	return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)); 
};
Date.getDaysInMonth = function(year, month) {
	return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};
Date.prototype.isLeapYear = function() { 
	return Date.isLeapYear(this.getFullYear()); 
};
Date.prototype.getDaysInMonth = function() { 
	return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};
Date.prototype.addMonths = function(value) {
	var n = this.getDate();
	this.setDate(1);
	this.setMonth(this.getMonth() + value);
	this.setDate(Math.min(n, this.getDaysInMonth()));
	return this;
};
	
var now = new Date('2018-07-31T09:00:00.000+09:00');
console.debug("한국 시간 2018년 7월 31일 09시로 설정: ");
console.debug("toISOString():", now.toISOString());
console.debug("toLocaleString():", now.toLocaleString());
now.addMonths(1);
console.debug("+1 month:", now.toISOString());
now.addMonths(1);
console.debug("+2 month:", now.toISOString());
now.addMonths(1);
console.debug("+3 month:", now.toISOString());
now.addMonths(1);
console.debug("+4 month:", now.toISOString());
now.addMonths(1);
console.debug("+5 month:", now.toISOString());
now.addMonths(1);
console.debug("+6 month:", now.toISOString());
now.addMonths(1);
console.debug("+7 month:", now.toISOString());

var now = new Date('2018-07-31T09:00:00.000+09:00');
console.debug("다시 한국 시간 2018년 7월 31일 09시로 설정: ");
console.debug("toISOString():", now.toISOString());
console.debug("toLocaleString():", now.toLocaleString());
now.addMonths(-1);
console.debug("-1 month:", now.toISOString());
now.addMonths(-1);
console.debug("-2 month:", now.toISOString());
now.addMonths(-1);
console.debug("-3 month:", now.toISOString());
now.addMonths(-1);
console.debug("-4 month:", now.toISOString());
now.addMonths(-1);
console.debug("-5 month:", now.toISOString());
now.addMonths(-1);
console.debug("-6 month:", now.toISOString());
now.addMonths(-1);
console.debug("-7 month:", now.toISOString());
