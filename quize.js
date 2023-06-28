let form=document.querySelector("form")
let output=document.querySelector(".result");

let correctAnswers=["3","equalateral","Hypotenuse","right angle","180","pythagoras","scalen triangle","acute angled triangle","c^2","trigonometry"]

form.addEventListener("submit",formHandler);

function formHandler(e){
    e.preventDefault();
    calculateScore();
}

function calculateScore(){
    let score=0;
    let index=0;
    let formAnswers=new FormData(form);
    // console.log(formAnswers);
    for(let value of formAnswers.values()){
        if (value===correctAnswers[index]) {
            score=score+1;
        }
        index=index+1;
    }

    // console.log(score)
    output.style.display="block"
    output.innerHTML="Your score is : "+score;
}