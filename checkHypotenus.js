let height = document.getElementById("height");
let width = document.getElementById("width");
let output = document.querySelector(".output");
let form = document.querySelector("form");
output.style.visibility="hidden"
form.addEventListener("submit", formHandler);

function formHandler(e) {
  e.preventDefault();
  validateData( height.value,width.value);
}
function validateData(h,w){

    if(h&&w){
        // console.log(h+""+w)
        checkHypotenus(h,w);
    }
    else{
        alert("enter height and width");
    }
}

function checkHypotenus(h,w){
    h=Number(h);
    w=Number(w);

    let hypotenus=Math.sqrt(Math.pow(h,2)+Math.pow(w,2));
    // console.log(Math.sqrt(hypotenus))
output.style.visibility="inherit"
    output.innerHTML="Hypotenuse: "+hypotenus

}