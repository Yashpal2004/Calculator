let num1 = 5
let num2 = 6
let operator = "+"

function addition(num1, num2) {
    return num1 + num2
}

function subtraction(num1, num2) {
    return num1 - num2
}

function multiplication(num1, num2) {
    return num1 * num2
}

function division(num1, num2) {
    return num1 / num2
}

function operate(num1, operator, num2) {
    if (operator === "+") {
        return addition(num1, num2)
    } else if (operator === "-") {
        return subtraction(num1, num2)
    } else if (operator === "*") {
        return multiplication(num1, num2)
    } else if (operator === "/") {
        return division(num1, num2)
    } else {
        console.log("ERROR")
    }
}

window.onload = () => {
    console.log(operate(num1, operator, num2))
}