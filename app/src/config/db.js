"use strict";

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "loginapi.cebhryeoapak.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "rkdwntjd797503",
  database: "loginAPI"
});

db.connect();

module.exports = db;