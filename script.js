const prevExpression = document.querySelector('.previous.expression');
const currExpression = document.querySelector('.current.expression');


let first;
let second;
let operator;





function operate(operator, first, second) {
    switch (operator) {
        case '+': 
            return add(first, second);
        case '-':
            return subtract(first, second);
        case '*': 
            return multiply(first, second);
        case '/': 
            return divide(first, second);
        case '^':
            return power(first, second);
    }
}

function add(x, y) {return x + y;}

function subtract(x, y) {return x - y;}

function multiply(x, y) {return x * y;}

function divide(x, y) {return x / y;}

function negate(x) {return x * -1;}

function power(x, y) {return x ** y;}

