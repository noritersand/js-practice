/**
 * 단축키:
 * - 코파일럿 발동: alt + \
 * - 코파일럿 제안 선택: tab
 * - 자동 완성 제안 창 보기: ctrl + enter
 * - 자동 완성 제안 창 닫기: ctrl + w
 */

/**
 * 구구단을 출력
 * @param {number} n 
 */
function multiplicationTable(n) {
  for (let i = 1; i <= 9; i++) {
    console.log(n + " * " + i + " = " + n * i);
  }
}
multiplicationTable(2);
multiplicationTable(3);
multiplicationTable(4);
multiplicationTable(5);
multiplicationTable(6);
multiplicationTable(7);
multiplicationTable(8);
multiplicationTable(9);
