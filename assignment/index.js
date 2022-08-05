const title = document.querySelector("body");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

function handleResize() {
      let wframe = window.innerWidth;
      
      if(wframe<=400){
        title.style.backgroundColor = colors[0];
      }else if(wframe>400 && wframe <=700){
        title.style.backgroundColor = colors[1];
      }else{
        title.style.backgroundColor = colors[2];
      }
    }
  
  window.addEventListener("resize", handleResize);
  