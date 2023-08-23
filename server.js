const express = require('express');

const utils = require('./utils');
const multipartHandler = require('./multipart-handler');

// express 도움말: https://expressjs.com/ko/4x/api.html
const app = express();
const port = 8888;
const webroot = __dirname + '/public';

// 포트 리스닝
app.listen(port, () => {
  console.log('Server is listening at http://localhost:' + `${port}`);
});

// 무쓸모
/* 
app.get('/', (req, res) => {
  // console.debug('Requesting index page');
  res.redirect('/index.html')
});
 */

app.use(express.static(webroot));

// express.static() 있어서 없어도 됨
/* 
app.get('*', (req, res) => {
  res.sendFile(req.path, { root: webroot })
});
 */

// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.all('*', (req, res, next) => {
  req.method == 'GET' ? utils.printGetRequestInfo(req) : utils.printPostRequestInfo(req);
  next();
});

// ---------- 여기까지 서버 기본 설정 ----------

app.get('/error500.data', (req, res) => {
  res.status(500).send('Something broke!');
});

app.get('/success.data', (req, res) => {
  res.set('Content-Type', 'text/html').end('Everything is okay');
  // res.end()는 res.status(200).end()와 같음
});

app.post('/success.data', (req, res) => {
  res.set('Content-Type', 'text/html').end('Everything is okay');
});

app.get('/success-json.data', (req, res) => {
  res.set('Content-Type', 'application/json').json({ message: 'Everything is okay' });
});

app.post('/success-json.data', (req, res) => {
  res.set('Content-Type', 'application/json').json({ message: 'Everything is okay' });
});

app.post('/get-my-form-data.data', (req, res) => {
  /*
    저 위에 express.urlencoded({ extended: true }) 덕분에 폼 데이터도 body로 받을 수 있음.
    만약 안되면 Content-Type 헤더가 application/x-www-form-urlencoded인지 확인할 것
  */
  res.json(req.body);
});

app.post('/get-my-request-body.data', (req, res) => {
  res.json(req.body);
});

app.post('/upload-file', multipartHandler.upload.single('file'), (req, res) => {
  res.json(req.file);
});

// ---------- 이 아래는 리펙토링 필요(URL 수정 등) ----------

app.get('/uncategorized/*.data', (req, res) => {
  res.json(req.query); // 데이터를 응답할 땐 res.send() 혹은 res.json()
});

app.post('/uncategorized/*.data', (req, res) => {
  res.json(req.query);

});

app.post('/*.html', (req, res) => {
  res.json(req.body);
});
