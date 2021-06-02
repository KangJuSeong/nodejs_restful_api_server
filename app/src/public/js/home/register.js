"use strict";

// html 태그에 있는 id 값을 통해 질의 선택자 설정 가능 (앞에 # 붙여주기)
const id = document.querySelector("#id");
const pw = document.querySelector("#psword");
const _pw = document.querySelector("#_psword");
const nm = document.querySelector("#name");
const email = document.querySelector("#email");
const registerBtn = document.querySelector("#register");

registerBtn.addEventListener("click", register);

function register() {
  const check_pw = _pw.value;
  const req = {
    id: id.value,
    pw: pw.value,
    nm: nm.value,
    email: email.value,
  };
  if(!id.value || !pw.value || !nm.value || !email.value)  return alert("빈칸을 입력해주세요.");
  if (req.pw != check_pw) return alert("비밀번호가 일치하지 않습니다.");
  // 서버로 데이터 전송
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  }).then((res) => res.json())
  .then((res) => {
    if(res.success == true) {
      location.href = "/login";
    };
    alert(res.message);
  }).catch((err) => {
    console.error(err);
  });
};
