
let rxp = RegExp(/\d+/);
console.log(rxp.exec('1234')); // Array [ "1234" ]
console.log(rxp.exec('abc')); // null

let rxp2 = RegExp(/\d*/);
console.log(rxp2.exec('1234')); // Array [ "1234" ]
console.log(rxp2.exec('abc')); // Array [ "" ] // 빈 문자열 배열이 반환되는 이유는 0개 이상의 숫자를 의미하는 정규식 때문이다
