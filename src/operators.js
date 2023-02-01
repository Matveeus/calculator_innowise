import {
 percent, operationsSwitch, clear, switchSignFunction, equal,
} from './operations';

function handleOperatorClick(clickedOperator, calculator) {
    const output = document.getElementById('output');
    if (calculator.operatorActive === true) {
        calculator.currentOperator = clickedOperator;
        calculator.currentValue = output.value;
        return;
    }
    if (calculator.currentOperator !== '') {
        operationsSwitch(calculator);
    }
    calculator.operatorActive = true;
    calculator.currentValue = output.value;
    calculator.currentOperator = clickedOperator;
    calculator.newNumber = true;
}

export function operatorsInit(calculator) {
    const operators = document.querySelectorAll('.key-operator');
    operators.forEach((operator) => {
        operator.addEventListener('click', (e) => {
            handleOperatorClick(e.target.value, calculator);
            calculator.equalCounter = 0;
        });
    });
    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', () => {
        clear(calculator);
        calculator.equalCounter = 0;
    });
    const switchSign = document.getElementById('switch_sign');
    switchSign.addEventListener('click', switchSignFunction);
    const equalSign = document.getElementById('equal');
    equalSign.addEventListener('click', () => {
        equal(calculator);
    });
    const percentSign = document.getElementById('percent');
    percentSign.addEventListener('click', () => {
        percent(calculator);
        calculator.equalCounter = 0;
    });
}
