# js-testbad

자바스크립트 테스트용 저장소

#### environments

- Node.js

## 초기 설정

```bash
npm install
```

## package.json 스크립트

- start
- test
- tap
- jsdoc

### 로컬 서버 시작

HTML로 만든 테스트 파일 확인하려면 실행:

```bash
npm start
```

### jest 유닛 테스트

감시 모드로 실행하도록 작성해놨음:

```bash
npm test
```

테스트 파일 위치는 `src/tests/jest/` 아래에 있슴.

### Mocha 유닛 테스트

```bash
npm run mocha
```

테스트 파일 위치는 `src/tests/mocha/` 아래.

### TAP 유닛 테스트

```bash
npm run tap
```

테스트 파일 위치는 `src/tests/tap/` 아래.

### JSDoc

JSDoc 문서 만들어보기:

```bash
npm run jsdoc
```

테스트 파일 위치는 `src/tests/jsdoc/` 아래

끗.
