let numA = 1;
let numB = 2;
let operator= 'add';

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

let keys = document.querySelectorAll('.key');

keys.forEach(keys => keys.addEventListener('click', () => console.log('hi')));
