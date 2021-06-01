"use strict";

const e = require("express");
const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");

const output = {
  home: (req, res) => {
    console.log('home');
    res.render("home/index");
  },
  login: (req, res) => {
    console.log('login');
    res.render("home/login");
  }
};

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  }
};

// 오브젝트 형식으로 내보내기
module.exports = {
  output,
  process,
};