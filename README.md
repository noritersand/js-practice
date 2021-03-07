# laboratory-js

자바스크립트 테스트용 저장소.

### 처음 받으면 모듈 설치

```bash
npm install
```

### JS 유닛 테스트

```bash
# 유닛 테스트
npm exec mocha test/**
```

### JS + HTML 테스트:

일단은 [http-server](https://github.com/http-party/http-server) 모듈 사용함.

```bash
# 서버 시작
npm exec http-server "webroot -p 8888"

# npx로 서버 시작
npx http-server webroot -p 8888
```

브라우저로 [http://localhost:8888](http://localhost:8888) 열기
