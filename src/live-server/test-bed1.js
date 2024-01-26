const {log} = console;

var rxp = RegExp(/\d+/);
log(rxp.exec('1234')); // Array [ "1234" ]
log(rxp.exec('abc')); // null

var rxp2 = RegExp(/\d*/);
log(rxp2.exec('1234')); // Array [ "1234" ]
log(rxp2.exec('abc')); // Array [ "" ] // 빈 문자열 배열이 반환되는 이유는 0개 이상의 숫자를 의미하는 정규식 때문이다
