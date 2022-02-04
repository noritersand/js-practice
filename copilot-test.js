// 구구단(2~9단)을 출력
function gugudan() {
    var result = '';
    for (var i = 2; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
            result += i + ' * ' + j + ' = ' + i * j + '\n';
        }
    }
    return result;
}
console.log(gugudan());
