"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl")

// 루트
router.get('/', ctrl.output.home);
// 로그인
router.get('/login', ctrl.output.login);
// 로그인 API
router.post('/login', ctrl.process.login);

// 외부에서 사용할 수 있또록 exports
module.exports = router;