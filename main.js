let previousNumber = '';
let currentNumber = '';
let operator = '';
let result = '';
let updateDisplay = false;
let loopLastOperation = false;
let updateOperation = false;
const display = document.querySelector('#display');
const keys = document.querySelectorAll('.key');

keys.forEach((keys) => keys.addEventListener('click', () => {
    const key = keys.textContent;
    if (key === '=') {
        operate(key);
        updateDisplay = true;
        loopLastOperation = true;
        updateOperation = true;
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        if (updateOperation) {
            operate(key);
            updateOperation = false;
        } else {
            updateOperation = true;
        }
        grabOperator(key);
        updateDisplay = true;
        loopLastOperation = false;
    } else if (key >= '0' && key <= '9') {
        update(key);
    } else if (key === 'C') {
        clear();
    } else if (key === '.') {
        if (currentNumber.includes('.')) {
            return;
        } else {
            update(key);
        }
    } else if (key === 'CE') {
        display.textContent = '0';
        currentNumber = '';
    } else if (key === '←') {
        display.textContent = display.textContent.slice(0, -1);
        currentNumber = display.textContent;
    } else if (key === '+/-') {
        display.textContent = `-${display.textContent}`;
        currentNumber = display.textContent;
    }
}));

function grabOperator(key) {
    operator = key;
    previousNumber = currentNumber;
    currentNumber = '';
}

function operate() {
    currentNumber = display.textContent;
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
            updateNumbers()
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
    if (currentNumber.length < 8) {
        updateOperation = true;
         if (updateDisplay) {
            currentNumber += key;
            display.textContent = currentNumber;
            updateDisplay = false;
        } else {
            currentNumber += key;
            display.textContent = currentNumber; 
        }
    // } else if (display.textContent.length == 8 {

    }
}

function clear() {
    previousNumber = '';
    currentNumber = '';
    operator = '';
    result = '';
    updateDisplay = false;
    loopLastOperation = false;
    updateOperation = false;
    display.textContent = '0';
}

function add(previousNumber, currentNumber) {
     result = String(Number(previousNumber) + Number(currentNumber));
     if (result.length > 8) {
        display.textContent = 'MEM ERR ';
     } else {
        display.textContent = String(result);
     }
}

function subtract(previousNumber, currentNumber) {
    result = String(Number(previousNumber) - Number(currentNumber));
    if (result.length > 8) {
        display.textContent = 'MEM ERR ';
     } else {
        display.textContent = String(result);
     }
}

function multiply(previousNumber, currentNumber) {
    result = String(Number(previousNumber) * Number(currentNumber));
    if (result.length > 8) {
        display.textContent = 'MEM ERR ';
     } else {
        display.textContent = String(result);
     }
}

function divide(previousNumber, currentNumber) {
    if (currentNumber == 0) {
        result = String(0);
        display.textContent = 'ERROR';
    } else {
        result = String(Number(previousNumber) / Number(currentNumber));
        if (result.length > 8) {
            display.textContent = 'MEM ERR ';
         } else {
            display.textContent = String(result);
         }
        }
}

function updateNumbers() {
    if (currentNumber == 0) {
        return;
    } else {
        previousNumber = currentNumber;
        currentNumber = result;
    }
}

clear();
