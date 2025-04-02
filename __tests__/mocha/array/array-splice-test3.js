import assert from 'assert';

function printElements(obj) {
  // log('print elements: ');
  for (var i in obj) {
    // log('\t' + i + ": " + JSON.stringify(obj[i]));
  }
}

function getObj() {
  var obj = [
    {key: 'a'},
    {key: 'b'},
    {key: 'c'},
    {key: 'd'},
    {key: 'e'},
    {key: 'f'},
    {key: 'g'},
    {key: 'h'},
    {key: 'i'},
    {key: 'j'}
  ]; // 모두 10개
  return obj;
}

var obj = getObj();
for (var i = 0; i < obj.length; i++) {
  var key = obj[i].key;
  if (key == 'd' || key == 'e' || key == 'f') {
    let imalone = obj.splice(i, 1); // splice는 삭제된 요소만 갖는 배열을 반환한다.
    if (typeof newObj == 'undefined') {
      var newObj = [];
    }
    newObj = newObj.concat(imalone); // 합침
    i--; // 삭제했으니 인덱스도 후퇴. 이건 for-in을 써도 해결 안됨
  }
}

printElements('obj:', obj);
printElements('newObj:', newObj);

describe('Array.splice test3', () => {
  it('should be true', () => {
    assert.strictEqual(obj.length, 7); // 3개 splice 했으니 남은건 7개
    assert.strictEqual(newObj.length, 3);
  });
});
