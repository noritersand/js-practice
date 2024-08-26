const dayjs = require('dayjs');

let now = dayjs(); // dayjs(new Date())와 같음

let someday = dayjs('2024-08-14T14:24:00+09:00'); 
let anotherDay = dayjs('2024-08-30T23:59:59+09:00'); 
let invalidDate = dayjs(null);

describe('Day.js test suite', () => {
  test('display', () => {
    expect(someday.toString()).toBe('Wed, 14 Aug 2024 05:24:00 GMT');
    expect(someday.toJSON()).toBe('2024-08-14T05:24:00.000Z')
    expect(someday.toISOString()).toBe('2024-08-14T05:24:00.000Z');
  });
  test('validation', () => {
    expect(invalidDate.isValid()).toBeFalsy();
    expect(invalidDate.toString()).toBe('Invalid Date');
  });
  test('display-format', () => {
    expect(someday.format('YY')).toBe('24');
    expect(someday.format('YYYY')).toBe('2024');
    expect(someday.format('M')).toBe('8');
    expect(someday.format('MM')).toBe('08');
    expect(someday.format('MMM')).toBe('Aug');
    expect(someday.format('MMMM')).toBe('August');
    expect(someday.format('D')).toBe('14');
    expect(someday.format('DD')).toBe('14');
    expect(someday.format('d')).toBe('3');
    expect(someday.format('dd')).toBe('We');
    expect(someday.format('ddd')).toBe('Wed');
    expect(someday.format('dddd')).toBe('Wednesday');
    expect(someday.format('H')).toBe('14');
    expect(someday.format('HH')).toBe('14');
    expect(someday.format('h')).toBe('2');
    expect(someday.format('hh')).toBe('02');
    expect(someday.format('m')).toBe('24');
    expect(someday.format('mm')).toBe('24');
    expect(someday.format('s')).toBe('0');
    expect(someday.format('ss')).toBe('00');
    expect(someday.format('SSS')).toBe('000');
    expect(someday.format('Z')).toBe('+09:00');
    expect(someday.format('ZZ')).toBe('+0900');
    expect(someday.format('A')).toBe('PM');
    expect(someday.format('a')).toBe('pm');

    expect(someday.format('YYYY-MM-DD HH:mm:ss')).toBe('2024-08-14 14:24:00');
    expect(someday.format('YYYY-MM-DD HH:mm:ss Z')).toBe('2024-08-14 14:24:00 +09:00');
  });
  test('query', () => {
    expect(someday.isBefore(anotherDay)).toBeTruthy();
    expect(anotherDay.isAfter(someday)).toBeTruthy();
    expect(anotherDay.isSame(someday)).toBeFalsy();
  });
});
