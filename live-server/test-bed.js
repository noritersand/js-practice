const { log } = console;

function fn(){
  console.log(getRandomNumber(2, 1)); // 1-2 사이 랜덤 
  console.log(getRandomNumber(10, 5)); // 5-15 사이 랜덤
  console.log(getRandomNumber(4, 0)); // 0-3 사이 랜덤
  console.log(getRandomNumber(4, 1)); // 1-4 사이 랜덤
}

/**
 * 랜덤 정수 구하기
 * 현재는 양수만 가능
 * 
 * @param {number} range 랜덤으로 구할 값의 범위
 * @param {number} minimum 최소값
 * @returns 
 */
function getRandomNumber(range, minimum) {
  return Math.floor(Math.random() * range + minimum);
}

