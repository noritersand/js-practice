/**
 * 유니코드는 3, 나머지는 1로 계산
 */
function calculateByteLength(value) {
	var byteLength = 0;
	for (var i = 0; i < value.length; i++) {
		var tmp = escape(value.charAt(i));
		if (tmp.length == 1) {
			byteLength++;
		} else if (tmp.indexOf('%u') != -1) {
			byteLength += 3;
		} else if (tmp.indexOf('%') != -1) {
			byteLength += tmp.length/3;
		}
	}
	return byteLength;
}

console.assert('3' == calculateByteLength('abc')); // 3
console.assert('9' == calculateByteLength('a한b글c')); // 9
console.assert('19' == calculateByteLength('112abc한글이다.')); // 19
