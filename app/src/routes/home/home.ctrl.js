"use strict";

const User = require("../../models/User");

const output = {
  home: (req, res) => {
    console.log('home');
    res.render("home/index");
  },
  login: (req, res) => {
    console.log('login');
    res.render("home/login");
  },
  register: (req, res) => {
    console.log('signup');
    res.render("home/register");
  }
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  }
};

// 오브젝트 형식으로 내보내기
module.exports = {
  output,
  process,
};