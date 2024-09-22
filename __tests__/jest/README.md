## JEST 도움말

- [https://jestjs.io/docs/api](https://jestjs.io/docs/api)

### toBe()와 toEqual()의 차이

toBe()는 값이나 객체의 주소를 비교하고, toEqual()은 값이나 객체의 내용을 비교한다.

### 부정문

부정문(not to be)는 `.not` modifier를 사용한다.

```js
expect(original).not.toBe(cloned);
```
