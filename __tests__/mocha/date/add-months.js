import assert from 'assert';

// 소스 출처: https://stackoverflow.com/questions/5645058/how-to-add-months-to-a-date-in-javascript
Date.isLeapYear = function (year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
Date.getDaysInMonth = function (year, month) {
  return [31, Date.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};
Date.prototype.isLeapYear = () => {
  return Date.isLeapYear(this.getFullYear());
};
Date.prototype.getDaysInMonth = () => {
  return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};
Date.prototype.addMonths = function (value) {
  let n = this.getDate();
  this.setDate(1);
  this.setMonth(this.getMonth() + value);
  this.setDate(Math.min(n, this.getDaysInMonth()));
  return this;
};

describe('addMonths() 테스트#1', () => {
  it('1달 씩 더하기 테스트', () => {
    let now = new Date('2018-07-31T09:00:00.000+09:00');
    // log('한국 시간 2018년 7월 31일 09시로 설정: ');
    assert.strictEqual(now.toISOString(), '2018-07-31T00:00:00.000Z');
    assert.strictEqual(now.toLocaleString(), '2018. 7. 31. 오전 9:00:00');

    now.addMonths(1); // +1달
    assert.strictEqual(now.toISOString(), '2018-08-31T00:00:00.000Z');
    now.addMonths(1); // +2달
    assert.strictEqual(now.toISOString(), '2018-09-30T00:00:00.000Z');
    now.addMonths(1); // +3달
    assert.strictEqual(now.toISOString(), '2018-10-30T00:00:00.000Z');
    now.addMonths(1); // +4달
    assert.strictEqual(now.toISOString(), '2018-11-30T00:00:00.000Z');
    now.addMonths(1); // +5달
    assert.strictEqual(now.toISOString(), '2018-12-30T00:00:00.000Z');
    now.addMonths(1); // +6달
    assert.strictEqual(now.toISOString(), '2019-01-30T00:00:00.000Z');
    now.addMonths(1); // +7달
    assert.strictEqual(now.toISOString(), '2019-02-28T00:00:00.000Z');
    now.addMonths(1); // +8달
    assert.strictEqual(now.toISOString(), '2019-03-28T00:00:00.000Z');
    now.addMonths(1); // +9달
    assert.strictEqual(now.toISOString(), '2019-04-28T00:00:00.000Z');
  });
  it('1달 씩 빼기 테스트', () => {
    let now = new Date('2018-07-31T09:00:00.000+09:00');
    // log('다시 한국 시간 2018년 7월 31일 09시로 설정: ');
    assert.strictEqual(now.toISOString(), '2018-07-31T00:00:00.000Z');
    assert.strictEqual(now.toLocaleString(), '2018. 7. 31. 오전 9:00:00');

    now.addMonths(-1); // -1달
    assert.strictEqual(now.toISOString(), '2018-06-30T00:00:00.000Z');
    now.addMonths(-1); // -2달
    assert.strictEqual(now.toISOString(), '2018-05-30T00:00:00.000Z');
    now.addMonths(-1); // -3달
    assert.strictEqual(now.toISOString(), '2018-04-30T00:00:00.000Z');
    now.addMonths(-1); // -4달
    assert.strictEqual(now.toISOString(), '2018-03-30T00:00:00.000Z');
    now.addMonths(-1); // -5달
    assert.strictEqual(now.toISOString(), '2018-02-28T00:00:00.000Z');
    now.addMonths(-1); // -6달
    assert.strictEqual(now.toISOString(), '2018-01-28T00:00:00.000Z');
    now.addMonths(-1); // -7달
    assert.strictEqual(now.toISOString(), '2017-12-28T00:00:00.000Z');
    now.addMonths(-1); // -8달
    assert.strictEqual(now.toISOString(), '2017-11-28T00:00:00.000Z');
    now.addMonths(-1); // -9달
    assert.strictEqual(now.toISOString(), '2017-10-28T00:00:00.000Z');
  });
});
