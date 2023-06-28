//  AREA USING BASE AND HEIGHT

let base=document.getElementById("base");
let height=document.getElementById("height");
let form=document.querySelector("form");
let area1=document.querySelector(".area1");

form.addEventListener("submit", formHandler);

function formHandler(e){
    e.preventDefault();
    console.log("submitted");
}