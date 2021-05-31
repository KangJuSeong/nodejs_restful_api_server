"use strict";

const root = (req, res) => {
  console.log('home');
  res.render("home/index");
}

const login = (req, res) => {
  console.log('login');
  res.render("home/login");
}

// 오브젝트 형식으로 내보내기
module.exports = {
  root,
  login,
};