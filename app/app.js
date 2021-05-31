"use strict";

const express = require('express');
const app = express();

// 라우팅
const route = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
// view 엔진
app.set("view engine", "ejs");

// body parser 미들웨어 등록 -> router 전에 선언해야함
app.use(express.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));
// express.static 을 이용하여 정적 경로를 지정
app.use(express.static(`${__dirname}/src/public`));
// 미들웨어 등록 메서드 use()
app.use("/", route);

// app 내보내기
module.exports = app;