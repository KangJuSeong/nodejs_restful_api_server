"use strict";

const fs = require("fs").promises;

class UserStorage {
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
  static getUsers(...params) {
    var users = fs.readFileSync("./src/databases/db/users.json", 'utf-8');
    users = JSON.parse(users);
    // reduce 는 두번째 매개변수의 개수만큼 반복
    const newUsers = params.reduce((newUsers, param) => {
      if(users.hasOwnProperty(param)) {
        newUsers[param] = users[param];
      }
      return newUsers;
    }, {});
    return newUsers;
  };

  static getUserInfo(id) {
    // readFile 을 promise 로 구현
    return fs
      .readFile("./src/databases/users.json")
      .then((data => {
        return this.#getUserInfo(data, id);
      }))
      .catch((err) => { console.error(err) });
  };

  static save(client) {
    return true;
  };
};

module.exports = UserStorage;