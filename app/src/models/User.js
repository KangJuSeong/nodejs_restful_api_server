"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const info = UserStorage.getUserInfo(body.id);
    if (!info.id) {
      return { success: false, message: "존재하지 않는 계정" };
    }
    if (info.id === body.id && info.psword === body.psword) {
      return { success: true };
    }
    else {
      return { success: false, message: "비밀번호 불일치" };
    }
  }

  register() {
    const body = this.body;
    

  }
}

module.exports = User;