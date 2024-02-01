let num1 = ''
let num2 = ''
let operator = ''
let total
let disp

let op = ["+", "-", "*", "/"]

function setup() {
    document.getElementById("clear").addEventListener("click", clear)
    document.getElementById("equal").addEventListener("click", equate)
    document.getElementById("one").addEventListener("click", display)
    document.getElementById("two").addEventListener("click", display)
    document.getElementById("three").addEventListener("click", display)
    document.getElementById("four").addEventListener("click", display)
    document.getElementById("five").addEventListener("click", display)
    document.getElementById("six").addEventListener("click", display)
    document.getElementById("seven").addEventListener("click", display)
    document.getElementById("eight").addEventListener("click", display)
    document.getElementById("nine").addEventListener("click", display)
    document.getElementById("zero").addEventListener("click", display)
    document.getElementById("add").addEventListener("click", display)
    document.getElementById("subtract").addEventListener("click", display)
    document.getElementById("multiply").addEventListener("click", display)
    document.getElementById("divide").addEventListener("click", display)
}

function display() {
    let attribValue = this.innerHTML

    if (op.includes(attribValue)) {
        operator = attribValue
        console.log(operator)
    }

    if (typeof(attribValue) === typeof("hi") && !operator) {
        num1 = num1 + attribValue
        console.log(num1)
    } else if (typeof(attribValue) === typeof("hi") && operator && !op.includes(attribValue)) {
        num2 = num2 + attribValue
        console.log(num2)
    }

    disp = num1 + operator + num2

    document.getElementById("screen").innerHTML = disp
}

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

function equate() {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    total = operate(num1, operator, num2)
    console.log(total)
    document.getElementById("screen").innerHTML = total
}

function clear() {
    total = 0
    num1 = ''
    num2 = ''
    operator = ''
    disp = ''
    document.getElementById("screen").innerHTML = 0
}

window.onload = () => {
    setup()
}