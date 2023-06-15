let num1El = document.getElementById("num1-el").textContent = 10
let num2El = document.getElementById("num2-el").textContent = 2
let sumEl = document.getElementById("sum-el")


function add(){
    let result =  num1El + num2El 
    let num = result + " - "
    sumEl.textContent = "sum: " + num
}

function sub(){
    let result = num1El - num2El
    let num = result + " - "
    sumEl.textContent = "sum: " + num
}

function div(){
    let result = num1El / num2El
    let num = result +  " - "
    sumEl.textContent = "sum: " + num
}

function mutiply(){
    let result = num1El * num2El
    let num = result + " - "
    sumEl.textContent = "sum: " + num
}