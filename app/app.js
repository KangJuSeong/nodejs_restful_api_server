"use strict";

const express = require('express');
const route = require("./src/routes/home");

const app = express();

// 앱 세팅
app.set("views", "./src/views");
// view 엔진
app.set("view engine", "ejs");


// 미들웨어 등록 메서드 use()
app.use("/", route);
// express.static 을 이용하여 정적 경로를 지정
app.use(express.static(`${__dirname}/src/public`));

// app 내보내기
module.exports = app;