// 소스 출처: http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript

/**
 * Number.prototype.format(n, x, s, c)
 * 
 * @param {number} n length of decimal
 * @param {number} x length of whole part
 * @param {object} s sections delimiter
 * @param {object} c decimal delimiter
 */
Number.prototype.format = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

console.log('12345678.9:', 12345678.9.format(2, 3, '.', ','));  // "12.345.678,90"
console.log('123456.789:', 123456.789.format(4, 4, ' ', ':'));  // "12 3456:7890"
console.log('12345678.9', 12345678.9.format(0, 3, '-'));       // "12-345-679"
