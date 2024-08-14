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
    expect(invalidDate.isValid()).toBe(false);
    expect(invalidDate.toString()).toBe('Invalid Date');
  });
  
});