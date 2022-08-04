const title = document.querySelector("div.hello:first-child h1");
let count = 0;

console.dir(title);
function handleTitleClick(){
    count+=1;
    if (count%2==0){
        title.style.color = "blue";
    } else {
        title.style.color = "red";
    };
}

function handleMouseEnter(){
    count+=1;
    if (count%2==0){
        title.style.color = "blue";
    } else {
        title.style.color = "red";
    };

    title.innerText = "Thank u !"
}

function handleMouseLeave(){
    title.innerText = "Mouse is here!"
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
// 타이틀을 클릭하는 행위를 리슨한다.
title.onclick = handleTitleClick;

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}


window.addEventListener("resize", handleWindowResize);


function handleWindowCopy(){
    alert("copier!")
}
window.addEventListener("copy",handleWindowCopy);

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("you are on WIFI!");
}

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);