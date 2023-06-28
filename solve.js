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

areadSides.addEventListener("submit",(e)=>{
    e.preventDefault();
    let a=Number(document.getElementById("a").value);
    let b=Number(document.getElementById("b").value);
    let c=Number(document.getElementById("c").value);
    let s=(a+b+c)/2;    //  s=Semi-Perimeter
    let area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
    // console.log(area);
    answerAreaSides.style.display="block"
    answerAreaSides.innerHTML="Area: "+area;
})