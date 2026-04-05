let num1 = 1
let num2 = 5

let num1El = document.getElementById("num1-el")
num1El.textContent = num1

let num2El = document.getElementById("num2-el")
num2El.textContent = num2

let resultEl = document.getElementById("result-el")


function add(){
    let result = num1 + num2
    resultEl.textContent = "Answer: " + result
}
function subtract(){
    let result = num1 - num2
    resultEl.textContent = "Answer: " + result
}
function multiply(){
    let result = num1 * num2
    resultEl.textContent = "Answer: " + result
}
function divide(){
    let result = num1 / num2
    resultEl.textContent = "Answer: " + result
}
console.log(resultEl)