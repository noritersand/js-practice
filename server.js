const express = require('express');
const utils = require('./utils')

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

app.all('*', (req, res, next) => {
  utils.printRequestInformation(req);
  next();
});

app.get('/error500.data', (req, res) => {
  res.status(500).send('Something broke!');
});

app.get('/success.data', (req, res) => {
  res.set('Content-Type', 'text/html').end('Everything is okay'); 
  // res.end()는 res.status(200).end()와 같음
});

app.get('/uncategorized/*.data', (req, res) => {
  res.json(req.query); // 데이터를 응답할 땐 res.send() 혹은 res.json()
});

app.post('/uncategorized/*.data', (req, res) => {
  res.json(req.query);
});
