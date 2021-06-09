"use strict";

const db = require("../config/db");

class UserStorage {
  // 외부에서 객체 생성 없이 바로 사용하기 위해 static(정적)메서드라고 선언해야 함.
  static getUserInfo(id) {
    // 프로미스 객체로 만들어서 resolve, reject 처리 해주기
    const query = "SELECT * FROM users WHERE id = ?;";
    new Promise((resolve, reject) => {
      db.query(query, [id], (err, data) => {
        if (err) reject(err);
        else resolve(data[0]);
      });
    });
  }

  static async save(client) {
    const query = "INSERT INTO users(id, psword, name, email) VALUES(?, ?, ?, ?);";
    db.query(
      query,
      [client.id, client.psword, client.name, client.email],
      (err) => {
        if (err) reject(err);
        resolve({success: true});
    });
  }
};

module.exports = UserStorage;