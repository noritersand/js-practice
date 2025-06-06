import assert from 'assert';

/**
 * f로 지정된 포맷을 적용하여 문자열로 반환
 *
 * @param f format 문자
 *
 * usage:
 * - now.format('yyyy-MM-dd HH:mm:ss') // 2019-03-28 12:12:12
 * - now.format('yyMMdd') // 190328
 * - now.format('a/p hh시 mm분') // 오후 03시 28분
 * - now.format('MM월 dd일 E') // 03월 28일 목요일
 *
 * 소스 1차 출처가 어딘지 모르겠다. 'string.prototype.zf javascript datetime format' 으로 검색해보면 출처 표시 없는 블로그 글이 수두룩함.
 *
 * TODO zone 추가 필요. (GMT+9 뭐 이런거)
 *
 */
Date.prototype.format = function (format) {
  if (!this.valueOf()) {
    return '';
  }
  let weekName = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  let d = this;
  let h;
  return format.replace(/(yyyy|yy|MM|dd|E|hh|mm|sss|ss|a\/p)/gi, function (ele) {
    switch (ele) {
      case 'yyyy':
        return d.getFullYear();
      case 'yy':
        return (d.getFullYear() % 1000).subFormat(2);
      case 'MM':
        return (d.getMonth() + 1).subFormat(2);
      case 'dd':
        return d.getDate().subFormat(2);
      case 'E':
        return weekName[d.getDay()];
      case 'HH':
        return d.getHours().subFormat(2);
      case 'hh':
        return ((h = d.getHours() % 12) ? h : 12).subFormat(2);
      case 'mm':
        return d.getMinutes().subFormat(2);
      case 'sss':
        return d.getMilliseconds().subFormat(3);
      case 'ss':
        return d.getSeconds().subFormat(2);
      case 'a/p':
        return d.getHours() < 12 ? '오전' : '오후';
      default:
        return ele;
    }
  });
};
String.prototype.string = function (len) {
  let s = '',
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};
String.prototype.subFormat = function (len) {
  return '0'.string(len - this.length) + this;
};
Number.prototype.subFormat = function (len) {
  return this.toString().subFormat(len);
};

let now = new Date(1609054958214);
// log(now.toString());

describe('format() 테스트', () => {
  it('should be equals#1', () => {
    assert.strictEqual(now.format('yyyy-MM-dd HH:mm:ss'), '2020-12-27 16:42:38');
  });
  it('should be equals#2', () => {
    assert.strictEqual(now.format('yyMMdd'), '201227');
  });
  it('should be equals#3', () => {
    assert.strictEqual(now.format('a/p hh시 mm분'), '오후 04시 42분');
  });
  it('should be equals#4', () => {
    assert.strictEqual(now.format('MM월 dd일 E'), '12월 27일 일요일');
  });
  it('should be equals#5', () => {
    assert.strictEqual(now.format('HH:mm:ss.sss'), '16:42:38.214');
  });
});
