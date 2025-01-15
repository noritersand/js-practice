/**
 * @file Day.js 테스트
 * 공식 도움말: https://day.js.org/docs/en/installation/installation
 */

const dayjs = require('dayjs');

const now = dayjs(); // dayjs(new Date())와 같음

const someday = dayjs('2024-08-14T14:24:00+09:00');
const anotherDay = dayjs('2024-08-30T23:59:59+09:00');
const invalidDate1 = dayjs(null);

test('Weird, but valid anyway', () => {
  // 이렇게 하면 2025년 13월은 없으니 2026년 1월로 넘어가며, 1월 32일은 없으니 2월 1일이 된다.
  const weirdDay = dayjs('2025-13-32');
  // 알아서 계산함.
  expect(weirdDay.isValid()).toBe(true);
  // KST 2026-02-01 00시(UTC로 2026-01-31 15시)
  expect(weirdDay.toISOString()).toBe('2026-01-31T15:00:00.000Z');
  // 뒤에 시간을 붙이면 알아서 계산 못함
  const invalidDate2 = dayjs('2025-13-32T00:00:00Z');
  expect(invalidDate2.isValid()).toBe(false);
  expect(invalidDate2.toString()).toBe('Invalid Date');
});

test('Display', () => {
  expect(someday.toString()).toBe('Wed, 14 Aug 2024 05:24:00 GMT');
  expect(someday.toJSON()).toBe('2024-08-14T05:24:00.000Z')
  expect(someday.toISOString()).toBe('2024-08-14T05:24:00.000Z');
});

test('Validation', () => {
  expect(invalidDate1.isValid()).toBe(false);
  expect(invalidDate1.toString()).toBe('Invalid Date');
});

test('Query', () => {
  expect(someday.isBefore(anotherDay)).toBe(true);
  expect(anotherDay.isAfter(someday)).toBe(true);
  expect(anotherDay.isSame(someday)).toBe(false);
});

test('Difference', () => {
  expect(someday.diff(anotherDay)).toBe(-1416959000);
  expect(anotherDay.diff(someday)).toBe(1416959000);

  expect(someday.diff(anotherDay, 'millisecond')).toBe(-1416959000);
  expect(anotherDay.diff(someday, 'millisecond')).toBe(1416959000);

  expect(someday.diff(anotherDay, 'second')).toBe(-1416959);
  expect(anotherDay.diff(someday, 'second')).toBe(1416959);

  expect(someday.diff(anotherDay, 'minute')).toBe(-23615);
  expect(anotherDay.diff(someday, 'minute')).toBe(23615);

  expect(someday.diff(anotherDay, 'hour')).toBe(-393);
  expect(anotherDay.diff(someday, 'hour')).toBe(393);

  expect(someday.diff(anotherDay, 'day')).toBe(-16);
  expect(anotherDay.diff(someday, 'day')).toBe(16);

  expect(someday.diff(anotherDay, 'month')).toBe(0);
  expect(anotherDay.diff(someday, 'month')).toBe(0);
});

test('Display-Format', () => {
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

