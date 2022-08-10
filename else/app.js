const loginForm = document.querySelector("#login-form");    // html에서 폼을 찾음
const loginInput = loginForm.querySelector("input");        // 폼 안에 있는 input을 찾음
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const loginButton = loginForm.querySelector("button");      // 폼 안에 있는 button을 찾음
// // or 아래 처럼 작성해도 괜찮다.
// // const loginInput = document.querySelector("#login-form input")
// // const loginButton = document.querySelector("#login-form button")


// // 클릭 이벤트가 버튼과 연결되길 원한다면
// function handleLoginBtnClick() {
//     const username = loginInput.value;
//     // 폼을 사용하지 않으면 아래처럼 입력해주면 된다.
//     // if (username === "") {
//     //     alert("Please write your name");
//     // } else if(username.length > 15) {
//     //     alert("Your name is too long.");
//     // }
//     console.log(username);
// }
// loginButton.addEventListener("click", handleLoginBtnClick);



// form 자체 즉 html에서 지원하는 기능을 쓰고싶다면 아래처럼 하면 된다.

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    // greeting.innerText = "Hello " + username; 밑에께 새로운 방법
    paintGreetings();
    
}
function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings();
}


// 링크의 기본 동작은 다른 브라우저로 이동하는것 : 이걸 막아보자
// const link = document.querySelector("a")

// function handleLinkClick(event) {
//     event.preventDefault();
//     // alert("clicked!!!!"); alert는 잠깐 브라우저의 기본 event, 동작을 막아줌.
// }
// link.addEventListener("click", handleLinkClick);





// 유저의 정보를 브라우저에 저장하고 싶다면 ? localStroage 를 확인하자
// 개발자 도구에서 application 확인하기 or localStorage API 확인하기
