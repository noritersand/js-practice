// add date
var instance = new Date();
console.debug('instance:', instance.toISOString());
instance.setDate(instance.getDate() + 1);
console.debug('instance + 1day:', instance.toISOString());

var isoDate = new Date('2018-01-01T12:24:48Z')
console.debug('isoDate:', isoDate.toISOString());

var localeDate = new Date('2018-01-01 12:24:48')
console.debug('localeDate:', localeDate.toLocaleString());

var koreanTimeZone = new Date('2016-02-05T09:00:00.000+09:00')
console.debug('koreanTimeZone:', koreanTimeZone.toLocaleString());
