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

### 유닛 테스트: jest

jest 프레임워크 감시 모드 실행하기:

```bash
npm test
```

테스트 파일 위치는 `src/tests/jest/` 아래에 있슴.

### 유닛 테스트: Mocha

```bash
npm run mocha
```

테스트 파일 위치는 `src/tests/mocha/` 아래.

### 유닛 테스트: TAP

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
