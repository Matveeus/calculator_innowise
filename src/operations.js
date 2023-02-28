import { numberValidation, transformInt } from './utils';
const output = document.getElementById('output');

export function operationsSwitch(calculator) {
    if (!numberValidation(calculator.currentValue, output.value)) return;
    const outputBeforeOperation = output.value;
    switch (calculator.currentOperator) {
        case '+':
            output.value = transformInt(Number(calculator.currentValue) + Number(output.value));
            break;
        case '-':
            output.value = transformInt(calculator.equalCounter === 0
                ? (Number(calculator.currentValue) - Number(output.value))
                : (Number(output.value) - Number(calculator.currentValue)));
            break;
        case '*':
            output.value = transformInt(Number(calculator.currentValue) * Number(output.value));
            break;
        case '/':
            if (Number(output.value) === 0) {
                output.value = 'Error';
            }
            else {
                output.value = transformInt(calculator.equalCounter === 0
                    ? (Number(calculator.currentValue) / Number(output.value))
                    : (Number(output.value) / Number(calculator.currentValue)));
            }
            break;
        case 'exponentiation':
            output.value = transformInt(calculator.equalCounter === 0
                ? (Number(calculator.currentValue) ** Number(output.value))
                : (Number(output.value) ** Number(calculator.currentValue)));
            break;
        default:
            //eslint-disable-next-line no-useless-return
            return;
    }
    if (calculator.equalCounter === 0) {
        calculator.currentValue = outputBeforeOperation;
    }
}

export function clear(calculator) {
    calculator.currentOperator = '';
    calculator.currentValue = 0;
    output.value = 0;
}

export function switchSignFunction() {
    if (!numberValidation(output.value)) return;
    output.value = Number(output.value) * (-1);
}

export function percent(calculator) {
    if (!numberValidation(calculator.currentValue, output.value)) return;
    if (calculator.currentOperator === '') {
        output.value /= 100;
    } else {
        output.value = (Number(calculator.currentValue) * Number(output.value)) / 100;
    }
}

export function equal(calculator) {
    operationsSwitch(calculator);
    calculator.operatorActive = true;
    calculator.newNumber = true;
    calculator.equalCounter += 1;
}

//PRO operators

export function memoryAdd(calculator) {
    calculator.memoryValue += Number(output.value);
}

export function memorySubtract(calculator) {
    calculator.memoryValue -= Number(output.value);
}

export function memoryClear(calculator) {
    calculator.memoryValue = 0;
}

export function memoryRecall(calculator) {
    output.value = calculator.memoryValue;
}

export function squareFunction(calculator) {
    output.value = output.value ** 2;
}

export function cubeFunction(calculator) {
    output.value = output.value ** 3;
}

export function exponentiationFunction(calculator) {
    output.value = transformInt(Number(calculator.currentValue) ** Number(output.value));
}


