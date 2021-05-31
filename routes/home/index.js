"use strict";

const express = require("express");
const router = express.Router();

// 루트
router.get('/', (req, res) => {
  console.log('home');
  res.render("home/index");
});
// 로그인
router.get('/login', (req, res) => {
  console.log('login');
  res.render("home/login");
})

// 외부에서 사용할 수 있또록 exports
module.exports = router;