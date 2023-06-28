let areaBH=document.getElementById("areaBH");
let areadSides=document.getElementById("areadSides");
let areaSideAngle=document.getElementById("areaSideAngle");

let answerAreaBH=document.querySelector(".answerAreaBH");
let answerAreaSides=document.querySelector(".answerAreaSides");
let answerAreaAngleSides=document.querySelector(".answerAreaAngleSides");

areaBH.addEventListener("submit" , (e)=>{
    e.preventDefault();
    let base=Number(document.getElementById("base").value);
    let height=Number(document.getElementById("height").value);
    let area=base*height;
    answerAreaBH.style.display="block"
    answerAreaBH.innerHTML="Area: "+area
    // console.log(area)
})