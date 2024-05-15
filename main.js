var firstNumber;
var secondNumber;
var operator= '';

function add(firstNumber, secondNumber) {
     let answer = Number(firstNumber) + Number(secondNumber);
     displayValue = String(answer);
     display.textContent = String(displayValue);
}

function subtract(firstNumber, secondNumber) {
    let answer = Number(firstNumber) - Number(secondNumber);
    displayValue = String(answer);
    display.textContent = String(displayValue);
}

function multiply(firstNumber, secondNumber) {
    let answer = Number(firstNumber) * Number(secondNumber);
    displayValue = String(answer);
    display.textContent = String(displayValue);
}

function divide(firstNumber, secondNumber) {
    let answer = Number(firstNumber) / Number(secondNumber);
    displayValue = String(answer);
    display.textContent = String(displayValue);
}

function operate(n) {
    if (n != "=") {
        operator = n;
    }

    if (firstNumber == undefined) {
        firstNumber = displayValue;
        displayValue = undefined;
        display.textContent = firstNumber;
        return;
    }

    if (firstNumber != undefined & secondNumber == undefined) {
        secondNumber = displayValue;
        let a;
        switch (operator) {
            case '+':
                a = add(firstNumber, secondNumber);
                break;
            case '-':
                a = subtract(firstNumber, secondNumber)
                break;
            case '*':
                a = multiply(firstNumber, secondNumber)
                break;
            case '/':
                a = divide(firstNumber, secondNumber)
                break;
        }
        firstNumber= undefined;
        secondNumber= undefined;
        operator= '';
    }
}

let display = document.querySelector('#display');
display.textContent = "0";
var displayValue = display.textContent;

let numberKeys = document.querySelectorAll('.number');
numberKeys.forEach(numberKey => numberKey.addEventListener('click', () => updateDisplay(numberKey.textContent)));

function updateDisplay(n) {
    if (displayValue == "0" || displayValue == undefined) {
        displayValue = String(n);
        display.textContent = String(displayValue);
        return;
    }

    if (displayValue != "0" || displayValue != undefined) {
        operate()
        return;
    }

    if (display.textContent.length < 8) {
        displayValue += String(n);
        display.textContent = String(displayValue);
    }
}

let clearKey = document.querySelector('#keyClear');
clearKey.addEventListener('click', () => clear());
function clear() {
    firstNumber= undefined;
    secondNumber= undefined;
    operator= '';
    displayValue = "0";
    display.textContent = "0";
}

let opKeys = document.querySelectorAll('.operator');
opKeys.forEach(opKey => opKey.addEventListener('click', () => operate(opKey.textContent)));
