# lab-js

자바스크립트 테스트용 저장소.

### 처음 받으면 모듈 설치

```bash
npm install
```

### JS 유닛 테스트

```bash
# 유닛 테스트
npm exec mocha unit-test/**
```

### JS + HTML 테스트:

[express](https://expressjs.com) 사용함.

```bash
# 서버 시작
node server.js

# nodemon으로 서버 시작
npm exec nodemon server.js
# 혹은
npx nodemon server.js
```

브라우저로 [http://localhost:8888](http://localhost:8888) 열기
