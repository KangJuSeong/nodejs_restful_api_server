"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const client = this.body;
    const info = UserStorage.getUserInfo(client.id);
    if (!info.id) {
      return { success: false, message: "존재하지 않는 계정" };
    }
    if (info.id === client.id && info.psword === client.psword) {
      return { success: true };
    }
    else {
      return { success: false, message: "비밀번호 불일치" };
    }
  }

  register() {
    const client = this.body;
    const success = UserStorage.save(client);
    if(success) {
      return { success: success, message: "회원 가입 성공" };
    }
    else {
      return { success: false, message: "회원 가입 실패" };
    }
  }
}

module.exports = User;