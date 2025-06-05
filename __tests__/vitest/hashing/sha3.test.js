import {expect, test} from 'vitest';
import SHA3 from 'sha3';
import crypto from 'crypto';

test('NPM 패키지 sha3 테스트 #1 SHA3-512', () => {
  const sha3 = new SHA3(512);
  sha3.update('encode-me');
  const hash = sha3.digest('hex');

  expect(hash).toBe(
    '93acbd67a4d26d4922ea317223667f3f6ec7b40ed4e2a4686619742dcffe5e27a37e918a8a2a3268b14d220fc71795897d8af1ed2faf6ba7b73b5755d405f31e'
  );
});

test('NPM 패키지 sha3 테스트 #2 SHA3-512 소금친 거', () => {
  const sha3 = new SHA3(512); // 인스턴스 새로 만들어야지 위에 있는 hash 재사용하면 digest() 결과가 달라짐
  sha3.update('encode-me$salt');
  const hash = sha3.digest('hex');

  expect(hash).toBe(
    'd1a4b9de8b68c0eabf52cab937a567c0cb49ba1393ec90cb7322e72283db7d3b1893dd18253aa7bb1ebd357549867ba8f6a9c9608fe99681f0edb9b2c651e680'
  );
});

test('NPM 패키지 sha3 테스트 #3 xptmxm1!', () => {
  const sha3 = new SHA3(512); // 인스턴스 새로 만들어야지 위에 있는 hash 재사용하면 digest() 결과가 달라짐
  sha3.update('xptmxm1!');
  const hash = sha3.digest('hex');

  expect(hash).toBe(
    '4592a9aefaf68645efdf90a0c62742ef5f97e59aceaf537b87ddad0f3f1eb2e96cd201c097cf43ad31c4980238866506e4484116f152b141d5b1a48d6b78f053'
  );
});

test('NPM 패키지 crypto 테스트 #1 SHA3-512', () => {
  const plainText = 'encode-me';
  const hash = crypto.createHash('sha512').update(plainText).digest('hex')
  expect(hash).toBe(
    '920b031ce2d6540ff376b0fb98ad24e28233524b4eacb326d385dae37c20be47b6f9dbf7b2c4c924874163b5490e4888dd64c8cf014d501a4ff1470d96136d0c'
  );
});

test('NPM 패키지 crypto 테스트 #2 SHA3-512 소금친 거', () => {
  const plainText = 'encode-me$salt';
  const hash = crypto.createHash('sha512').update(plainText).digest('hex')
  expect(hash).toBe(
    '83b9d6beeb32cc146d76d1b3c476d3cc64bb8a57db25328da00fcb6d7e6f535b9acb72302b52603e06ef2e1b6d8e4ab99bbbe1b17dd9ca7b6c35a626d3eb0e9d'
  );
});

test('NPM 패키지 crypto 테스트 #3 xptmxm1!', () => {
  const plainText = 'xptmxm1!';
  const hash = crypto.createHash('sha512').update(plainText).digest('hex')
  expect(hash).toBe(
    '4ecb3faa0e087f186085eeae87389bb84c840e214871600844e36bfbbcf01258db78f430542e5afaaf3fb5294d78f471a4022c554b3285c0222d2feaef1e34d5'
  );
});

test('NPM 패키지 crypto 테스트 #4 rjqskrlsqlalfqlalfqlalfqjsgh123', () => {
  const plainText = 'rjqskrlsqlalfqlalfqlalfqjsgh123';
  const hash = crypto.createHash('sha512').update(plainText).digest('hex')
  expect(hash).toBe(
    '5c5843ce86dff6d7da0b35bfe9c189a5aad7616138c529cbc9438a8e2c3ecf2bab9780f201d0d3137e84b92aff8806436c1beccc5f5b164969714bb6d4734204'
  );
});
