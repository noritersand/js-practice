import {expect, test} from 'vitest';
import SHA3 from 'sha3';

test('NPM 패키지 sha3 테스트 #1 SHA3-512', () => {
  const sha3 = new SHA3(512);
  sha3.update('encode-me');
  const hash = sha3.digest('hex');

  expect(hash).toBe(
    '93acbd67a4d26d4922ea317223667f3f6ec7b40ed4e2a4686619742dcffe5e27a37e918a8a2a3268b14d220fc71795897d8af1ed2faf6ba7b73b5755d405f31e'
  );
});

test('NPM 패키지 sha3 테스트 #2 SHA3-512 소금친 거', () => {
  const sha3_2 = new SHA3(512); // 인스턴스 새로 만들어야지 위에 있는 hash 재사용하면 digest() 결과가 달라짐
  sha3_2.update('encode-me$salt');
  const hash = sha3_2.digest('hex');

  expect(hash).toBe(
    'd1a4b9de8b68c0eabf52cab937a567c0cb49ba1393ec90cb7322e72283db7d3b1893dd18253aa7bb1ebd357549867ba8f6a9c9608fe99681f0edb9b2c651e680'
  );
});

test('NPM 패키지 sha3 테스트 #3 qwer1234', () => {
  const sha3_2 = new SHA3(512); // 인스턴스 새로 만들어야지 위에 있는 hash 재사용하면 digest() 결과가 달라짐
  sha3_2.update('qwer1234');
  const hash = sha3_2.digest('hex');

  expect(hash).toBe(
    '0d403e21c44d857d2c1847cb35ea16b5c4a8acbb3b669bda2e45ced7c736d4d51f3b23486e64a0a4b9ff2b3359e53af6c4ab8caa59ba728479114a2cc51096be'
  );
});
