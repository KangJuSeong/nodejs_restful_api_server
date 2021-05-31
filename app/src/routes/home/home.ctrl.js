"use strict";

const e = require("express");
const UserStorage = require("../../models/UserStorage");

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
    const id = req.body.id,
    psword = req.body.psword;
    const users = UserStorage.getUsers("id", "psword");
    const response = {};
    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.psword[idx] == psword) {
        response.success = true;
        return res.json(response);
      }
      else {
        response.success = false;
        response.message = "비밀번호 불일치";
        return res.json(response);
      };
    }
    else {
      response.success = false;
      response.message = "존재하지 않는 계정";
      return res.json(response);
    };
  }
};

// 오브젝트 형식으로 내보내기
module.exports = {
  output,
  process,
};