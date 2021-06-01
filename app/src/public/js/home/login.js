"use strict";

// html 태그에 있는 id 값을 통해 질의 선택자 설정 가능 (앞에 # 붙여주기)
const id = document.querySelector("#id");
const pw = document.querySelector("#psword");
const loginBtn = document.querySelector("#login");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };
  console.log(id.value);
  // 서버로 데이터 전송
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  }).then((res) => res.json())
  .then((res) => {
    if(res.success == true) {
      location.href = "/";
    }else {
      alert(res.message);
    }
  }).catch((err) => {
    console.error(err);
  })
};
