let num1 = []
let num2 = []
let operator = ""

function plus() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}

let display = document.querySelector(".display")

let numButtons = document.querySelectorAll(".numButtons")
numButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        display.textContent += event.target.textContent
        num1 += event.target.textContent
        console.log(num1)  
    })
})

let reset = document.querySelector("#reset")

reset.addEventListener("click", () => {
    display.textContent = ""
    num1 = []
    num2 = []
    operator = ""
})