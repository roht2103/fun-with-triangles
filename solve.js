let areaBH = document.getElementById("areaBH");
let areadSides = document.getElementById("areadSides");
let areaSideAngle = document.getElementById("areaSideAngle");

let answerAreaBH = document.querySelector(".answerAreaBH");
let answerAreaSides = document.querySelector(".answerAreaSides");
let answerAreaAngleSides = document.querySelector(".answerAreaAngleSides");

areaBH.addEventListener("submit", (e) => {
  e.preventDefault();
  let base = Number(document.getElementById("base").value);
  let height = Number(document.getElementById("height").value);
  let area = base * height;
  answerAreaBH.style.display = "block";
  answerAreaBH.innerHTML = "Area: " + area;
  // console.log(area)
});

areadSides.addEventListener("submit", (e) => {
  e.preventDefault();

  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  let c = Number(document.getElementById("c").value);
  if (a + b > c && b + c > a && a + c > b) {
    let s = (a + b + c) / 2; //  s=Semi-Perimeter
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
    answerAreaSides.style.display = "block";
    answerAreaSides.innerHTML = "Area: " + area;
  } else {
    alert("Sum of two sides must be greater than the third side");
  }
});


areaSideAngle.addEventListener("submit",(e)=>{
    e.preventDefault();
    let side1=Number(document.getElementById("side1").value);
    let side2=Number(document.getElementById("side2").value);
    let angle=Number(document.getElementById("angle").value);
    const angleInRadians = (angle * Math.PI) / 180;
    let area= (1 / 2) * side1 * side2 * Math.sin(angleInRadians);
    // console.log(area)
    answerAreaAngleSides.style.display="block";
    answerAreaAngleSides.innerHTML="Area: "+area
})