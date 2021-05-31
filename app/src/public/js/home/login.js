"use strict";

// html 태그에 있는 id 값을 통해 질의 선택자 설정 가능 (앞에 # 붙여주기)
const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBtn = document.querySelector("#login");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    pw: pw.value,
  };
  console.log(req);
};
