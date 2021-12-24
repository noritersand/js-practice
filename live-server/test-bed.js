const { log } = console;

let arr = [
  {
      "attr1": "11:00",
      "attr2": "14:00",
      "name": "1"
  },
  {
      "attr1": "07:00",
      "attr2": "11:00",
      "name": "2"
  },
  {
      "attr1": "15:00",
      "attr2": "17:00",
      "name": "3"
  },
  {
    "attr1": "18:00",
    "attr2": "19:00",
    "name": "4"
  }
];

function parseNumber(str) {
  return parseInt(str.replace(':', ''));
}

function isAmongUs(comparator, compareMe) {
  log('comparator:', comparator);
  log('compareMe:', compareMe);

  // if (comparator.name == '1' && compareMe.name == '2') {
  //   debugger;
  // }
  
  // comparator의 beginTime과 endTime 사이에
  // compareMe의 beginTime 혹은 endTime이 들어가면 
  // 중첩된 시간이라 판단하고 false 반환
  if (comparator.beginTime < compareMe.beginTime && compareMe.beginTime < comparator.endTime) {
    log(1)
    return false;
  } else if (comparator.beginTime < compareMe.endTime && compareMe.endTime < comparator.endTime) {
    log(2)
    return false
  }
  // 예외의 경우로 comparator의 beginTime ~ endTime보다 
  // compareMe의 beginTime ~ endTime 범위가 더 넓으면
  // 위의 검사에서 걸러내지 못하므로 아래 줄 추가
  if (compareMe.beginTime < comparator.beginTime && comparator.endTime < comparator.endTime) {
    log(3)
    return false;
  }

  // 또 추가
  // comparator 기간 내에 compareMe가 쏙 들어가는 경우
  // if (com)

  return true;
}

for (let i of arr) {
  i.beginTime = parseNumber(i.attr1);
  i.endTime = parseNumber(i.attr2);
  log(i);
}

let valid = true;
mainLoop: for (let i = 0; i < arr.length - 1; ++i) {
  log('i:', i, ', name:', arr[i].name);
  for (let j = i + 1; j < arr.length; ++j) {
    log('j:', j, ', name:', arr[j].name);
    valid = isAmongUs(arr[i], arr[j]);
    if (!valid) {
      break mainLoop;
    }
  }
}

console.log('valid:', valid);
document.querySelector('div#result').innerText = valid;