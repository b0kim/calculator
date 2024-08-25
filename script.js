const prevExpression = document.querySelector('.previous.expression');
const currExpression = document.querySelector('.current.expression');

let prevResult;
let first;
let second;
let operator;

const numberButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalsButton = document.querySelector('.equals-btn');

numberButtons.forEach( button => {
    button.addEventListener('click', () => {
        const digitChoice = button.dataset.choice; 
        parseDigitInput(digitChoice);
    })
});

operatorButtons.forEach( button => {
    button.addEventListener('click', () => {
        const operatorChoice = button.dataset.choice;
        parseOperatorInput(operatorChoice);
    })
})

function parseDigitInput(digit) {
    /*
    IF second
        APPEND digit to end of second
    ELSE IF operator
        SET second = digit
    ELSE IF first
        APPEND digit to end of first
    ELSE
        SET = first (if there is a previous result, wipe it out 
                and start new expression)
    */
    // if none aka display cleared
    if (second) {
        second += digit;
        currExpression.textContent = second;
    }
    else if (operator) {
        second = digit;
        currExpression.textContent = second;
    }
    else if (first) {
        first += digit;
        currExpression.textContent = first;
    }
    else {
        first = digit;
        currExpression.textContent = first;
    }
}

function parseOperatorInput(operatorChoice) {
    /*
    IF there is already first and second number:
        CALCULATE the result (as if we pressed equals)
        STORE the result in first
        SET operator
        SET second to null
    ELSE if there is a previous result
        SET first = previous result
        SET operator
    */
    if (first && second) {
        first = operate(operator, +first, +second);
        operator = operatorChoice;
        second = null;
    }
    else if (first) {
        operator = operatorChoice;
    }
    else if (prevResult) {
        first = prevResult;
        operator = operatorChoice;
    }
};


equalsButton.addEventListener('click', () => {
    if (first && second && operator) {
        // calculate input and display
        prevResult = operate(operator, +first, +second);
        first = null;
        second = null;
        operator = null;
    }
})

function operate(operator, first, second) {
    let result;
    switch (operator) {
        case '+': 
            result = add(first, second);
            break;
        case '-':
            result = subtract(first, second);
            break;
        case '*': 
            result = multiply(first, second);
            break;
        case '/': 
            result = divide(first, second);
            break;
        case '^':
            result = power(first, second);
            break;
    }
    currExpression.textContent = result;
    return result;
}

function add(x, y) {return x + y;}

function subtract(x, y) {return x - y;}

function multiply(x, y) {return x * y;}

function divide(x, y) {return x / y;}

function negate(x) {return x * -1;}

function power(x, y) {return x ** y;}

