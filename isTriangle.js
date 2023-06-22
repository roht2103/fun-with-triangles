let angle1 = document.getElementById("angle1");
let angle2 = document.getElementById("angle2");
let angle3 = document.getElementById("angle3");
const submitBtn = document.getElementById("submitBtn");
const form = document.querySelector("form");
form.addEventListener("submit", formHandler);
function formHandler(e) {
  e.preventDefault();
  validateData(angle1.value,angle2.value,angle3.value);
}

function validateData(a1, a2, a3) {
  if (a1 && a2 && a3) {
    console.log(a1 + " "+ a2 +" "+ a3)
  } else {
    console.log("error")
  }
}
