# js-testbad

자바스크립트 테스트용 저장소

#### environments

- Node.js


## 모듈 설치

```bash
npm install
# yarn install
```


## JS 유닛 테스트

잘 알려진 Node.js 테스트 프레임웍인 Mocha로 유닛 테스트

```bash
# 유닛 테스트: Mocha
npm test
```

테스트 파일 위치는 `src/test/mocha/` 아래

### Node-tap

또 다른 테스트 프레임웍인 TAP 추가함. 

```bash
# 유닛 테스트: TAP
npm run tap
```

테스트 파일 위치는 `src/test/tap/` 아래


## 웹 테스트

[express](https://expressjs.com) 사용함

```bash
# 서버 시작
node server.js

# nodemon으로 서버 시작
npm exec nodemon server.js
```

브라우저로 [http://localhost:8888](http://localhost:8888) 열기

끗.
