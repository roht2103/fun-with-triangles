let angle1 = document.getElementById("angle1");
let angle2 = document.getElementById("angle2");
let angle3 = document.getElementById("angle3");
const submitBtn = document.getElementById("submitBtn");
let output = document.querySelector(".output");
const form = document.querySelector("form");
form.addEventListener("submit", formHandler);
function formHandler(e) {
  e.preventDefault();
  validateData(angle1.value, angle2.value, angle3.value);
}

// output.style.display = "none";

function validateData(a1, a2, a3) {
  if (a1 && a2 && a3) {
    console.log(a1 + " " + a2 + " " + a3);
    isTriangle(a1, a2, a3);
  } else {
    alert("Provide all angles");
  }
}

function isTriangle(a1, a2, a3) {
  let sum = Number(a1) + Number(a2) + Number(a3);
  console.log(sum);
  if (sum === 180) {
    console.log("Yuhu! these angles can make a triangle");
    output.style.display = "block";
    output.innerHTML="Yuhu! these angles can make a triangle";
  } else {
    console.log("Oops! these angles can't make a triangle");
    output.style.display = "block";
    output.innerHTML="Oops! these angles can't make a triangle";
  }
}
