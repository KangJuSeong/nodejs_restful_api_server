"use strict";

const fs = require("fs").promises;

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
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, params);
      })
      .catch((err) => { console.error(err) });
  };

  static getUserInfo(id) {
    // readFile 을 promise 로 구현
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch((err) => { console.error(err) });
  };

  static async save(client) {
    const users = await this.getUsers(true);
    if(users.id.includes(client.id)) { return false; };
    users.id.push(client.id);
    users.psword.push(client.pw);
    users.name.push(client.nm);
    users.email.push(client.email);
    fs.writeFile("./src/databases/users.json", JSON.stringify(users));
    return true;
  };
};

module.exports = UserStorage;