const express = require('express');
const app = express();
const port = 8888;

const webroot = __dirname + '/webroot';

// express 도움말:
// https://expressjs.com/ko/4x/api.html

app.get('/', (req, res) => {
  // console.debug('Requesting index page');
  res.redirect('/index.html')
});

app.get('*.html', (req, res) => {
  // console.debug('req.path:', req.path);
  res.sendFile(req.path, { root: webroot })
});

app.get('*.data', (req, res) => {
  console.debug('req.path:', req.path)
  console.debug('req.params:', req.params);
  console.debug('req.query:', req.query);
  // console.debug('req.route:', req.route);
  res.send(req.query);
});

app.get('*', (req, res) => {
  // console.debug('req.path:', req.path);
  res.sendFile(req.path, { root: webroot })
});

app.post('*.data', (req, res) => {
  console.debug('req.path:', req.path)
  console.debug('req.params:', req.params);
  console.debug('req.query:', req.query);
  // console.debug('req.route:', req.route);
  res.send(req.query);
});

app.listen(port, () => {
  console.debug('Server is listening at http://localhost:' + `${port}`);
});
