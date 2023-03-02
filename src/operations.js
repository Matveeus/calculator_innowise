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
        case 'y_root':

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

export function squareFunction() {
    output.value = Number(output.value) ** 2;
}

export function cubeFunction() {
    output.value = Number(output.value) ** 3;
}

export function eToPowerFunction() {
    output.value = 2.7182818011463845 ** Number(output.value);
}

export function tenToPowerFunction() {
    output.value = 10 ** Number(output.value);
}

export function oneXthFunction() {
    if (Number(output.value) === 0) {
        output.value = "Error";
    } else {
        output.value = 1 / Number(output.value);
    }
}

export function squareRootFunction() {
    if (Number(output.value) < 0) {
        output.value = "Error";
    } else if (Number(output.value) === 0) {
        output.value = 0;
    } else {
        let result, x = Number(output.value) / 2;
        do {
            result = x;
            x = (result + (Number(output.value) / result)) / 2;
        } while (result !== x);
        output.value = result;
    }
}

export function cubeRootFunction() {
    if (Number(output.value) === 0) {
        output.value = 0;
    } else {
        let result, x = Number(output.value) / 2;
        do {
            result = x;
            x = (Number(output.value) / (x * x) + (x * 2)) / 3;
        } while (result !== x);
        output.value = result;
    }
}

export function factorialFunction() {
    if (Number(output.value) < 0) {
        output.value = "Error";
    } else if (Number(output.value) === 0) {
        output.value = 1;
    } else {
        for (let i = Number(output.value) - 1; i > 0 ; i--) {
            output.value = Number(output.value) * i;
        }
    }
}

export function piValue() {
    output.value = 3.14159265359;
}

export function eValue() {
    output.value = 2.71828182846;
}



