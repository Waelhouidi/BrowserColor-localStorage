let red=document.getElementById("red"),yellow=document.getElementById("yellow"),green=document.getElementById("green"),container=document.querySelector(".container");

if(localStorage.length>0){
   container.style.backgroundColor= localStorage.getItem("color");
}

function background(color){
    console.log(color)
container.style.backgroundColor=color;
localStorage.setItem("color",color)
}
