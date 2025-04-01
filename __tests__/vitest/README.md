# Vitest 도움말

- [Getting Started | Guide | Vitest](https://vitest.dev/guide/)


## 테스트 케이스 작성법

- 테스트 케이스는 `test()` 안에 작성한다.
- 여러 테스트 케이스를 하나의 블록(혹은 슈트)으로 묶으려면 `describe()` 안에 작성한다.
- `it()`은 `test()`의 별칭이다.

예시:

```js
test('one is one', () => {
  expect(1).toBe(1);
});

// 혹은

describe('some test suite', () => {
  it('should be true', () => {
    expect(1).toBe(1);
  });
});
```


## toBe()와 toEqual()의 차이

`toBe()`는 값이나 객체의 주소를 비교하고, `toEqual()`은 값이나 객체의 내용을 비교한다.


## 부정문

부정문(not to be)는 `.not` modifier를 사용한다.

```js
expect(original).not.toBe(cloned);
```
 
