"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl")

// 루트
router.get('/', ctrl.root);
// 로그인
router.get('/login', ctrl.login);

// 외부에서 사용할 수 있또록 exports
module.exports = router;