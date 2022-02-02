const express = require('express');
const app = express();
const utils = require('./utils')

const port = 8888;

const webroot = __dirname + '/public';

// express 도움말:
// https://expressjs.com/ko/4x/api.html

app.listen(port, () => {
  console.log('Server is listening at http://localhost:' + `${port}`);
});

app.use(express.static(webroot));

app.all('*', (req, res, next) => {
  utils.printRequestInformation(req);
  next();
});

app.post('/page/uncategorized/abc.data', (req, res) => {
  console.log('hello');
});

app.get('*.data', (req, res) => {
  res.send(req.query);
});

app.post('*.data', (req, res) => {
  res.send(req.query);
});
