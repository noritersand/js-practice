/**
 * @file 코파일럿 테스트용 파일
 * 
 * 단축키:
 * - alt + \: 코파일럿 발동: 
 * - tab: 코파일럿 제안 선택: 
 * - ctrl + enter: 자동 완성 제안 창 보기: 
 * - ctrl + w: 자동 완성 제안 창 닫기: 
 * - ctrl + shift + i: 코파일럿 빠른 채팅 열기. 원래 이건 크로미엄 요소 검사 단축키인데 무시됨
 * - alt + shift + p: 사이드 바의 코파일럿 뷰 포커싱 
 * - ctrl + i: 코파일런 인라인 챗 열기
 */


/**
 * multiplicationTable 함수는 주어진 숫자 n에 대한 곱셈 테이블을 생성한다.
 * 
 * @param {number} n - 곱셈 테이블의 크기를 나타내는 양의 정수
 * @returns {void}
 */
function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
multiplicationTable(99);



/**
 * 주어진 숫자 base의 0 제곱부터 32 제곱까지 출력 (base^0 ~ base^32)
 * 
 * @param {number} base - 거듭제곱의 밑이 되는 숫자
 * @returns {void}
 */
function power(base) {
  console.log(`${base} ^ 0 =`, 0);
  let result = base;
  console.log(`${base} ^ 1 =`, result);
  for (let i = 2; i <= 32; i++) {
    result *= base;
    console.log(`${base} ^ ${i} =`, result);
  }
}
power(2);
