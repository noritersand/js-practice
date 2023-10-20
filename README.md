# js-testbad

자바스크립트 테스트용 저장소

#### environments

- Node.js


## 초기 설정

nodejs 패키지 설치:

```bash
npm install
# yarn install
```

## package.json 스크립트

- start
- test
- tap
- jsdoc

### npm start

브라우저에 의존하는 테스트 파일을 확인하는 용도.

[express](https://expressjs.com) 적용한 웹 서버 기동:

```bash
# 서버 시작
node server.js

# nodemon으로 서버 시작
npm exec nodemon server.js
```

그리고 브라우저에서 [http://localhost:8888](http://localhost:8888) 열기

### npm test

잘 알려진 테스트 프레임웍 Mocha로 유닛 테스트:

```bash
npm test
```

테스트 파일 위치는 `src/test/mocha/` 아래

### npm run tap

또 다른 테스트 프레임웍인 TAP으로 유닛 테스트:

```bash
# 유닛 테스트: TAP
npm run tap
```

이 테스트 파일은 `src/test/tap/` 아래에 있음.

### npm run jsdoc 

JSDoc 문서 만들어보기:

```bash
npm run jsdoc
```

끗.
