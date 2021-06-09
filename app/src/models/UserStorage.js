"use strict";

const db = require("../config/db");

class UserStorage {
  //은닉화 된 getUsers 메서드
  static #getUsers(data, isAll, params) {
    const users = JSON.parse(data);
    if(isAll) { return users; };
    const newUsers = params.reduce((newUsers, param) => {
      if(users.hasOwnProperty(param)) {
        newUsers[param] = users[param];
      };
      return newUsers;
    }, {});
    return newUsers;
  };
  
  // 은닉화 된 getUserInfo 메서드
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  // 외부에서 객체 생성 없이 바로 사용하기 위해 static(정적)메서드라고 선언해야 함.
  static getUsers(isAll, ...params) {
  };

  static getUserInfo(id) {
    // 프로미스 객체로 만들어서 resolve, reject 처리 해주기
    new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE id = ?",[id], (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    })
  };

  static async save(client) {
  };
};

module.exports = UserStorage;