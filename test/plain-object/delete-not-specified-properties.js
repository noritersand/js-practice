const assert = require('assert');
const { log } = console;

/**
 * 문자열 배열인 propNames에서 언급되지 않은 프로퍼티들을 삭제한다.
 * 
 * @param {object} obj 
 * @param {string[]} propNames 
 */
function deleteNotSpecifiedProperties(obj, propNames) {
  for (var i in obj) {
    var cnt = 0;
    for (var j in propNames) {
      if (propNames[j] == i) {
        cnt++;
        break;
      }
    }
    if (cnt==0) {
      delete obj[i];
    }
  }
  return obj;
}

var obj = {
  selected: 1,
  status: "U",
  usrNo: 10278,
  loginId: "admin132",
  usrNm: "관리자132",
  passwd: "ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f",
  deptNo: 10002,
  lwrEntpNo: 0,
  regrId: "10101",
  regDts: "",
  modrId: "12345678",
  modDts: ""
};
var result1 = deleteNotSpecifiedProperties(obj, ['status', 'usrNo', 'passwd']); // 지정한 프로퍼티만 골라냄

var obj2 = {
  
};
// var result2 = deleteNotSpecifiedProperties(obj, ['status', 'usrNo', 'passwd']);

describe('test deleteNotSpecifiedProperties()', function() {
  it('should be pass', function() {
    assert.deepStrictEqual(result1, { status: 'U', usrNo: 10278, passwd: 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f' });
    
  });
});