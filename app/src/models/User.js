"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  // await 을 쓰기위해서는 해당 함수가 async 구문이 있어야함.
  async login() {
    const client = this.body;
    // info 가 promise를 반환하기 때문에 기다려줘야하는 await 구문 필요
    const info = await UserStorage.getUserInfo(client.id);
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

  async register() {
    const client = this.body;
    const success = await UserStorage.save(client);
    if(success) {
      return { success: success, message: "회원 가입 성공" };
    }
    else {
      return { success: success, message: "이미 존재하는 계정" };
    }
  }
}

module.exports = User;