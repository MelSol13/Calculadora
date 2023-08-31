let displayValue = "0";
let operator = null;
let prevValue = null;

function updateDisplay() {
    const display = document.getElementById("display");
    display.innerText = displayValue;
}

function press(number) {
    if (displayValue === "0") {
        displayValue = number.toString();
    } else {
        displayValue += number.toString();
    }
    updateDisplay();
}

function clr() {
    displayValue = "0";
    operator = null;
    prevValue = null;
    updateDisplay();
}

function setOP(op) {
    if (operator !== null) {
        calculate();
    }
    operator = op;
    prevValue = parseFloat(displayValue);
    displayValue = "0";
}

function calculate() {
    const currentValue = parseFloat(displayValue);
    let result;
    switch (operator) {
        case "+":
            result = prevValue + currentValue;
            break;
        case "-":
            result = prevValue - currentValue;
            break;
        case "*":
            result = prevValue * currentValue;
            break;
        case "/":
            result = prevValue / currentValue;
            break;
        default:
            break;
    }
    displayValue = result.toString();
    operator = null;
    prevValue = null;
    updateDisplay();
}

document.addEventListener("DOMContentLoaded", function () {
    updateDisplay();
});