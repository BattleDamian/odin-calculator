var firstNumber;
var secondNumber;
var operator= '';

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function operate(n1, n2, op) {
    switch (op) {
        case 'add':
            add(n1, n2);
            break;
        case 'subtract':
            subtract(n1, n2)
            break;
        case 'multiply':
            multiply(n1, n2)
            break;
        case 'divide':
            divide(n1, n2)
            break;
    }
}

let display = document.querySelector('#display');
display.textContent = "0";
var displayValue = display.textContent;

let numberKeys = document.querySelectorAll('.number');
numberKeys.forEach(numberKey => numberKey.addEventListener('click', () => updateDisplay(numberKey.textContent)));

function updateDisplay(n) {
    if (displayValue == 0) {
        displayValue = n;
        display.textContent = displayValue;
        return;
    }
    if (display.textContent.length < 8) {
        displayValue += n;
        display.textContent = displayValue;
    }
}

let opKeys = document.querySelectorAll('.op');
opKeys.forEach(opKey => opKey.addEventListener('click', () => updateDisplay(opKey.textContent)));



let clearKey = document.querySelector('#keyClear');
clearKey.addEventListener('click', () => clear());
function clear() {
    firstNumber;
    secondNumber;
    operator= '';
    displayValue = "0";
    display.textContent = "0";
}