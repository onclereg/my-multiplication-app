
let num1 = Math.ceil(Math.random()*10);

let num2 = Math.ceil(Math.random()*10);

let question = document.getElementById("h2").innerText=`What is ${num1} multiply by ${num2}?`;

let scoreEl = document.getElementById("score").innerText = "score = 0."

let inputEl = document.getElementById("input");

let correctAnswer = num1 * num2;

let formEl = document.getElementById("form");

formEl.addEventListener("submit",()=>{ updateScore()}
 );

 function updateScore(){
    let scores = 0 + inputEl.value;
    if (scores == correctAnswer){
        return scoreEl.innerText="correct";
    }
    else if(scores != correctAnswer){
        return scoreEl.innerText="incorrect";
    }
    else {
        return scoreEl;
    }}