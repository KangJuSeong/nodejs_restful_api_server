"use strict";

const e = require("express");

const users = {
  id: ["test"],
  psword: ["test"],
}

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
    psword = req.body.psword
    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.psword[idx] == psword) {
        return res.json({
          success: true,
        })
      }
      else {
        return res.json({
          success: false,
          message: "비밀번호 불일치"
        });
      };
    }
    else {
      return res.json({
        success: false,
        message: "존재하지 않는 계정"
      });
    };
  }
};

// 오브젝트 형식으로 내보내기
module.exports = {
  output,
  process,
};