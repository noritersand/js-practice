/**
 * @file Day.js 테스트
 * 공식 도움말: https://day.js.org/docs/en/installation/installation
 */

const dayjs = require('dayjs');

const now = dayjs(); // dayjs(new Date())와 같음

const someday = dayjs('2024-08-14T14:24:00+09:00');
const anotherDay = dayjs('2024-08-30T23:59:59+09:00');
const invalidDate = dayjs(null);

test('display', () => {
  expect(someday.toString()).toBe('Wed, 14 Aug 2024 05:24:00 GMT');
  expect(someday.toJSON()).toBe('2024-08-14T05:24:00.000Z')
  expect(someday.toISOString()).toBe('2024-08-14T05:24:00.000Z');
});

test('validation', () => {
  expect(invalidDate.isValid()).toBeFalsy();
  expect(invalidDate.toString()).toBe('Invalid Date');
});

test('query', () => {
  expect(someday.isBefore(anotherDay)).toBeTruthy();
  expect(anotherDay.isAfter(someday)).toBeTruthy();
  expect(anotherDay.isSame(someday)).toBeFalsy();
});

test('display-format', () => {
  expect(someday.format('YY')).toBe('24'); // Two-digit year
  expect(someday.format('YYYY')).toBe('2024'); // Four-digit year
  expect(someday.format('M')).toBe('8'); // The month, beginning at 1
  expect(someday.format('MM')).toBe('08'); // The month, 2-digits
  expect(someday.format('MMM')).toBe('Aug'); // The abbreviated month name
  expect(someday.format('MMMM')).toBe('August'); // The full month name
  expect(someday.format('D')).toBe('14'); // The day of the month
  expect(someday.format('DD')).toBe('14'); // The day of the month, 2-digits
  expect(someday.format('d')).toBe('3'); // The day of the week, with Sunday as 0
  expect(someday.format('dd')).toBe('We'); // The min name of the day of the week
  expect(someday.format('ddd')).toBe('Wed'); // The short name of the day of the week
  expect(someday.format('dddd')).toBe('Wednesday'); // The name of the day of the week
  expect(someday.format('H')).toBe('14'); // The hour
  expect(someday.format('HH')).toBe('14'); // The hour, 2-digits
  expect(someday.format('h')).toBe('2'); // The hour, 12-hour clock
  expect(someday.format('hh')).toBe('02'); // The hour, 12-hour clock, 2-digits
  expect(someday.format('m')).toBe('24'); // The minute
  expect(someday.format('mm')).toBe('24'); // The minute, 2-digits
  expect(someday.format('s')).toBe('0'); // The second
  expect(someday.format('ss')).toBe('00'); // The second, 2-digits
  expect(someday.format('SSS')).toBe('000'); // The millisecond, 3-digits
  expect(someday.format('Z')).toBe('+09:00'); // The offset from UTC, ±HH:mm
  expect(someday.format('ZZ')).toBe('+0900'); // The offset from UTC, ±HHmm
  expect(someday.format('A')).toBe('PM'); // AM/PM
  expect(someday.format('a')).toBe('pm'); // am/pm

  // examples
  expect(someday.format('YYYY-MM-DD HH:mm:ss')).toBe('2024-08-14 14:24:00');
  expect(someday.format('YYYY-MM-DD HH:mm:ss Z')).toBe('2024-08-14 14:24:00 +09:00');
});

