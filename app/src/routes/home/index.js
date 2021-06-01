"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl")

// 홈 화면
router.get('/', ctrl.output.home);
// 로그인 화면
router.get('/login', ctrl.output.login);
// 회원가입 화면
router.get('/register', ctrl.output.register);

// 로그인 API
router.post('/login', ctrl.process.login);

// 외부에서 사용할 수 있또록 exports
module.exports = router;