const data = {
    firstNumber: undefined,
    secondNumber: undefined,
    operator: "",
};
const display = document.querySelector('#display').textContent;
const numberKeys = document.querySelectorAll('.number');
const opKeys = document.querySelectorAll('.operator');
const clearKey = document.querySelector('#keyClear');

var displayValue = display;
numberKeys.forEach(numberKey => numberKey.addEventListener('click', () => updateDisplay(numberKey.textContent)));
opKeys.forEach(opKey => opKey.addEventListener('click', () => operate(opKey.textContent)));

function add(firstNumber, secondNumber) {
     let answer = Number(firstNumber) + Number(secondNumber);
     displayValue = String(answer);
     display = String(displayValue);
}

function subtract(firstNumber, secondNumber) {
    let answer = Number(firstNumber) - Number(secondNumber);
    displayValue = String(answer);
    display = String(displayValue);
}

function multiply(firstNumber, secondNumber) {
    let answer = Number(firstNumber) * Number(secondNumber);
    displayValue = String(answer);
    display = String(displayValue);
}

function divide(firstNumber, secondNumber) {
    let answer = Number(firstNumber) / Number(secondNumber);
    displayValue = String(answer);
    display = String(displayValue);
}

function operate(n) {
    if (n != "=") {
        operator = n;
    }

    if (firstNumber == undefined) {
        firstNumber = displayValue;
        displayValue = undefined;
        display = firstNumber;
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

function updateDisplay(n) {
    if (displayValue == "0" || displayValue == undefined) {
        displayValue = String(n);
        display = String(displayValue);
        return;
    }

    if (displayValue != "0" || displayValue != undefined) {
        operate()
        return;
    }

    if (display.length < 8) {
        displayValue += String(n);
        display = String(displayValue);
    }
}

clearKey.addEventListener('click', () => clear());
function clear() {
    firstNumber= undefined;
    secondNumber= undefined;
    operator= '';
    displayValue = "0";
    display = "0";
}
