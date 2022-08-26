const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
   event.preventDefault(); // 브라우저 기본 동작 막기
   loginForm.classList.add(HIDDEN_CLASSNAME); // form에 hidden class 추가
   const username = loginInput.value; // loginInput의 값을 변수에 저장
   localStorage.setItem("username", username);
   greeting.innerText = `Hello ${username}`; // string안에 변수값 넣기
   greeting.classList.remove(HIDDEN_CLASSNAME); // h1에서 hidden class 삭제
}


loginForm.addEventListener("submit", onLoginSubmit);