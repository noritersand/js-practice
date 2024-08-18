const assert = require('assert');
// const expect = require('chai').expect
const {log} = console;
const {SHA3} = require('sha3');

// #1 SHA3-512
const sha3 = new SHA3(512);
sha3.update('encode-me');
let first = sha3.digest('hex');

// #2 SHA3-512 소금친 거
const sha3_2 = new SHA3(512); // 인스턴스 새로 만들어야지 위에 있는 hash 재사용하면 digest() 결과가 달라짐
sha3_2.update('encode-me$salt');
let second = sha3_2.digest('hex');

describe('NPM 패키지 sha3 테스트', () => {
  it('should be equals', () => {
    assert.strictEqual(
      first,
      '93acbd67a4d26d4922ea317223667f3f6ec7b40ed4e2a4686619742dcffe5e27a37e918a8a2a3268b14d220fc71795897d8af1ed2faf6ba7b73b5755d405f31e',
    );
    assert.strictEqual(
      second,
      'd1a4b9de8b68c0eabf52cab937a567c0cb49ba1393ec90cb7322e72283db7d3b1893dd18253aa7bb1ebd357549867ba8f6a9c9608fe99681f0edb9b2c651e680',
    );
  });
});
