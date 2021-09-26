const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('bye world');
});

app.get('/test', (req, res) => {
  res.send({res: "this is a test result"});
});

module.exports = app;
