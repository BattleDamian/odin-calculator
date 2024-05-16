let previousNumber = '';
let currentNumber = '';
let operator = '';
let result = '';
let updateDisplay = false;
let loopLastOperation = false;
const display = document.querySelector('#display');
const keys = document.querySelectorAll('.key');

keys.forEach((keys) => keys.addEventListener('click', () => {
    const key = keys.textContent;
    if (key === '=') {
        operate(key);
        updateDisplay = true;
        loopLastOperation = true;
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        grabOperator(key);
        updateDisplay = true;
        loopLastOperation = false;
    } else if (key >= '0' && key <= '9') {
        update(key);
    } else if (key === 'AC') {
        clear();
    }
}));

function grabOperator(key) {
    operator = key;
    previousNumber = currentNumber;
    currentNumber = display.textContent;
}

function operate() {
    if (currentNumber && previousNumber) {
        if (!loopLastOperation) {
            switch (operator) {
                case '+':
                    add(previousNumber, currentNumber);
                    break;
                case '-':
                    subtract(previousNumber, currentNumber)
                    break;
                case '*':
                    multiply(previousNumber, currentNumber)
                    break;
                case '/':
                    divide(previousNumber, currentNumber)
                    break;
            }
            previousNumber = currentNumber;
            currentNumber = result;
        } else if (loopLastOperation) {
            switch (operator) {
                case '+':
                    add(result, previousNumber);
                    break;
                case '-':
                    subtract(result, previousNumber)
                    break;
                case '*':
                    multiply(result, previousNumber)
                    break;
                case '/':
                    divide(result, previousNumber)
                    break;
            }
        }

    }
}

function update(key) {
    if (display.textContent.length < 8) {
         if (updateDisplay) {
            currentNumber = '';
            currentNumber += key;
            display.textContent = currentNumber;
            updateDisplay = false;
        } else {
            currentNumber += key;
            display.textContent = currentNumber; 
        }
    }
}

function clear() {
    currentNumber = '';
    previousNumber= '';
    operator= '';
    result = '';
    display.textContent = '0';
}

function add(previousNumber, currentNumber) {
     result = String(Number(previousNumber) + Number(currentNumber));
     display.textContent = String(result);
}

function subtract(previousNumber, currentNumber) {
    result = String(Number(previousNumber) - Number(currentNumber));
    display.textContent = String(result);
}

function multiply(previousNumber, currentNumber) {
    result = String(Number(previousNumber) * Number(currentNumber));
    display.textContent = String(result);
}

function divide(previousNumber, currentNumber) {
    result = String(Number(previousNumber) / Number(currentNumber));
    display.textContent = String(result);
}

clear();
