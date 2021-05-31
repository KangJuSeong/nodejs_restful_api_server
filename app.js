"use strict";

const express = require('express');
const route = require("./routes/home");

const app = express();

// 앱 세팅
app.set("views", "./views");
// view 엔진
app.set("view engine", "ejs");


// 미들웨어 등록 메서드 use()
app.use("/", route);

module.exports = app;