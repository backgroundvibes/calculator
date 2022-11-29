let num1 = []
let num2 = []
let operator = ""
let displayText = ""
let displayText2 = ""

let plusSymbol = document.querySelector("#plus").textContent
let subtractionSymbol = document.querySelector("#subtract").textContent
let multiplicationSymbol = document.querySelector("#multiply").textContent
let divisionSymbol = document.querySelector("#divide").textContent


function calc(num1, num2, operator) {
    let firstNum = parseInt(num1.toString(), 10)
    let secondNum = parseInt(num2.toString(), 10)

    if (operator == plusSymbol) {
        let rawResult = firstNum + secondNum
        let chopped = rawResult.toString().split("", 15)
        let result = chopped.join("")
        return parseInt(result, 10)

    } else if (operator == subtractionSymbol) {
        let rawResult = firstNum - secondNum
        let chopped = rawResult.toString().split("", 15)
        let result = chopped.join("")
        return parseInt(result, 10)

    } else if (operator == multiplicationSymbol) {
        let rawResult = firstNum * secondNum
        let chopped = rawResult.toString().split("", 15)
        let result = chopped.join("")
        return parseInt(result, 10)
        
    } else if (operator == divisionSymbol) {
        if (secondNum == 0) {
            alert("Oi! No dividing by zero!")
            operator = ""
            return ""
        } else {
            let rawResult = firstNum / secondNum
            let chopped = rawResult.toString().split("", 15)
            let result = chopped.join("")
            return parseInt(result, 10)
        }
    }
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
            if (operator === "") {
                displayText = displayText + e.target.textContent
                display.textContent = displayText
                operator = e.target.textContent
            } else {
                display.textContent = calc(num1, num2, operator) + e.target.textContent
                num1 = calc(num1, num2, operator)
                num2 = []
                operator = e.target.textContent
                displayText = ""
                displayText2 = ""
            }
        }
    })
})

let equals = document.querySelector("#equals")
equals.addEventListener("click", () => {
    if (num1 != 0) {
        if (num2 != 0) {
            display.textContent = calc(num1, num2, operator)
            num1 = []
            num2 = []
            operator = ""
            displayText = ""
            displayText2 = ""
        } else {
            alert("Oi! No dividing by zero!")
            display.textContent = ""
            num1 = []
            num2 = []
            operator = ""
            displayText = ""
            displayText2 = ""
        }
    }
})