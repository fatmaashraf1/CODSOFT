let currentInput = '';
let currentOperator = '';
let history = '';

function appendNumber(number) {
    currentInput += number;
    updateScreen();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateScreen();
    }
}

function setOperator(operator) {
    if (currentInput !== '') {
        if (currentOperator !== '') {
            calculate();
        }
        currentOperator = operator;
        history += currentInput + ' ' + operator + ' ';
        currentInput = '';
        updateScreen();
    }
}

function calculate() {
    if (currentOperator !== '' && currentInput !== '') {
        history += currentInput;
        let result;
        if (currentOperator === '%') {
            result = parseFloat(history.split('%')[0]) % parseFloat(history.split('%')[1]);
        } else {
            result = eval(history);
        }
        currentInput = result.toString();
        currentOperator = '';
        history = '';
        updateScreen();
    }
}

function clearScreen() {
    currentInput = '';
    currentOperator = '';
    history = '';
    updateScreen();
}

function deleteLastEntry() {
    currentInput = currentInput.slice(0, -1);
    updateScreen();
}

function updateScreen() {
    document.getElementById('history').textContent = history;
    document.getElementById('result').textContent = currentInput || '0';
}
