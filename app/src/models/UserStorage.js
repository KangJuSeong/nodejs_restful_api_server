"use strict";

class UserStorage {
  // # 을 이용하여 데이터 은닉화 
  static #users = {
    id: ["test"],
    psword: ["test"],
    name: ["test"],
  };

  // 외부에서 객체 생성 없이 바로 사용하기 위해 static(정적)메서드라고 선언해야 함.
  static getUsers(...params) {
    const users = this.#users;
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
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  };
};

module.exports = UserStorage;