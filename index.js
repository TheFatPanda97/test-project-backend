const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get('/', (req, res) => {
  res.send('bye world');
});

app.get('/test', (req, res) => {
  res.send({res: "this is a test result"});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
