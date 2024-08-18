const { log } = console;

eval('var obj = ' + document.querySelector('#qwer').value);
// log(obj);

// mayflies2108._0801onlinesale
var mo = {}

// 소진 여부 확인 AJAX
// 갔다 왔더니 소진 됐을 경우

// var brandCode = 'brandCode' + ele.brLgcAeEvtCdSeq;
// if (typeof mo[brandCode] === 'undefined') {
//   mo[brandCode] = 1;
// } else {
//   ++mo[brandCode];
// }

// if (mo[brandCode] >= obj.soldCount) {
//   log('소진딱지 부착');
// }


// for (var idx in obj) {
//   var ele = obj[idx];
//   log(ele);
  
//   getEventGiftGoodsStock(ele.brAaeEvtNo, ele.brLgcGoodsNo, ele.brLgcAeEvtCdSeq, ele.soldoutCount);
// }


// // brLgcAeEvtCdSeq = 태그에 이 번호와 같은 값으로 ID 설정되어 있음
function getEventGiftGoodsStock(brAaeEvtNo, brLgcGoodsNo, brLgcAeEvtCdSeq, soldoutCount) {
  function callback(json) {
    // if(json.aeEvtNo == brAaeEvtNo && json.goodsNo == brLgcGoodsNo) {
    // }
    if (json.ret > 0) {
      return;
    }

    var brandCode = 'brandCode' + brLgcAeEvtCdSeq;
    if (typeof mo[brandCode] === 'undefined') {
      mo[brandCode] = 1;
    } else {
      ++mo[brandCode];
    }

    if (mo[brandCode] >= obj.soldCount) {
      log('소진딱지 부착');
    }

    $('#' + brLgcAeEvtCdSeq).addClass('soldOut');

    // $('[id=gftSdOt' + idx +']').addClass('soldOut'); // $('[id=]') 형태이면 해당 아이디 가진 것 모두 선택
  }
  mayflyQueen.getEventGiftGoodsStock(brAaeEvtNo, brLgcGoodsNo, callback);
}


function getEventGiftGoodsStock(p1) {
  function callback() {
    console.log(p1);
  }
  ajax(callback);
}

function ajax(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

getEventGiftGoodsStock('aaa');
getEventGiftGoodsStock('bbb');
getEventGiftGoodsStock('ccc');