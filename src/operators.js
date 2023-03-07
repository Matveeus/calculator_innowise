import {
    percent, operationsSwitch, clear, switchSignFunction, equal, memoryAdd,
    memorySubtract, memoryClear, memoryRecall, squareFunction, cubeFunction, eToPowerFunction,
    tenToPowerFunction, oneXthFunction, squareRootFunction, cubeRootFunction,
    factorialFunction, piValue, eValue,
} from './operations';

function handleOperatorClick(clickedOperator, calculator) {
    const output = document.getElementById('output');
    if (calculator.operatorActive === true) {
        calculator.currentValue = output.value;
        calculator.currentOperator = clickedOperator;
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
        operator.addEventListener('click', () => {
            handleOperatorClick(operator.value, calculator);
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
    const addToMemory = document.getElementById('memory_add');
    addToMemory.addEventListener('click', () => {
        memoryAdd(calculator);
    });
    const subtractFromMemory = document.getElementById('memory_subtract');
    subtractFromMemory.addEventListener('click', () => {
        memorySubtract(calculator);
    });
    const clearMemory = document.getElementById('memory_clear');
    clearMemory.addEventListener('click', () => {
        memoryClear(calculator);
    });
    const recallMemory = document.getElementById('memory_recall');
    recallMemory.addEventListener('click', () => {
        memoryRecall(calculator);
    });
    const square = document.getElementById('square');
    square.addEventListener('click', () => {
        squareFunction();
    });
    const cube = document.getElementById('cube');
    cube.addEventListener('click', () => {
        cubeFunction();
    });
    const ePower = document.getElementById('e_to_power');
    ePower.addEventListener('click', () => {
        eToPowerFunction();
    });
    const tenPower = document.getElementById('10_to_power');
    tenPower.addEventListener('click', () => {
        tenToPowerFunction();
    });
    const oneXth = document.getElementById('one_x-th');
    oneXth.addEventListener('click', () => {
        oneXthFunction();
    });
    const squareRoot = document.getElementById('square_root');
    squareRoot.addEventListener('click', () => {
        squareRootFunction();
    });
    const cubeRoot = document.getElementById('cube_root');
    cubeRoot.addEventListener('click', () => {
        cubeRootFunction();
    });
    const factorial = document.getElementById('factorial');
    factorial.addEventListener('click', () => {
        factorialFunction();
    });
    const pi = document.getElementById('pi');
    pi.addEventListener('click', () => {
        piValue();
    });
    const e = document.getElementById('e');
    e.addEventListener('click', () => {
        eValue();
    });
}
