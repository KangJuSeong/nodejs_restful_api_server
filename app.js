const express = require('express');
const app = express();

// 앱 세팅
app.set("views", "./views");
// view 엔진
app.set("view engine", "ejs");

// 루트
app.get('/', (req, res) => {
  console.log('home');
  res.render("home/index");
});
// 로그인
app.get('/login', (req, res) => {
  console.log('login');
  res.render("home/login");
})

app.listen(3000, () => {
  console.log("Strar Server");
});