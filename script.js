let num1 = []
let num2 = []
let operator = ""
let displayText = ""
let displayText2 = ""

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
        if (operator == "") {
            displayText = displayText + event.target.textContent
            display.textContent = displayText
            num1 += event.target.textContent
        } else {
            displayText2 = displayText2 + event.target.textContent
            display.textContent = displayText2
            num2 += event.target.textContent
        }
    })
})

let reset = document.querySelector("#reset")

reset.addEventListener("click", () => {
    display.textContent = ""
    num1 = []
    num2 = []
    operator = ""
    displayText = ""
    displayText2 = ""
})

let opButtons = document.querySelectorAll(".operators")
opButtons.forEach(button => {
    button.addEventListener("click", e => {
        if (num1 != 0) {
            displayText = displayText + e.target.textContent
            display.textContent = displayText
            num1 = []
            operator = e.target.textContent
        }
    })
})