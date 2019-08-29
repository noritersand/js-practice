// 소스 출처: http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript

/**
 * Number.prototype.format(n, x)
 * 
 * @param {number} n length of decimal
 * @param {number} x length of sections
 */
Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

console.debug('1234:', (1234).format());           // "1,234"
console.debug('1234:', 1234..format());           // "1,234"
console.debug('12345:', 12345..format(2));         // "12,345.00"
console.debug('123456.7:', 123456.7.format(3, 2));    // "12,34,56.700"
console.debug('123456.789:', 123456.789.format(2, 4));  // "12,3456.79"
