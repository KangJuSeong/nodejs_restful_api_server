const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('hello');
  res.json({"hello": "hello"});
});

app.listen(3000, () => {
  console.log("Strar Server");
});