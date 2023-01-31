import {numberValidation, transformInt} from './utils';

export function operationsSwitch(calculator) {
    const output = document.getElementById('output');
    if (!numberValidation(calculator.currentValue, output.value)) return;
    let outputBeforeOperation = output.value;
    switch (calculator.currentOperator) {
        case '+':
            output.value = transformInt(Number(calculator.currentValue) + Number(output.value));
            break;
        case '-':
            output.value = transformInt(calculator.equalCounter === 0 ?
                (Number(calculator.currentValue) - Number(output.value)) :
                (Number(output.value) - Number(calculator.currentValue)));
            break;
        case '*':
            output.value = transformInt(Number(calculator.currentValue) * Number(output.value));
            break;
        case '/':
            if (Number(output.value) === 0) {
                output.value = 'Error';
            } else {
                output.value = transformInt(calculator.equalCounter === 0 ?
                    (Number(calculator.currentValue) / Number(output.value)) :
                    (Number(output.value) / Number(calculator.currentValue)));
            }
            break;
        default:
            //eslint-disable-next-line no-useless-return
            return;
    }
    if(calculator.equalCounter === 0){
        calculator.currentValue = outputBeforeOperation;
    }
}

export function clear(calculator) {
    const output = document.getElementById('output');
    calculator.currentOperator = '';
    calculator.currentValue = 0;
    output.value = 0;
}

export function switchSignFunction() {
    const output = document.getElementById('output');
    if (!numberValidation(output.value)) return;
    output.value = Number(output.value) * (-1);
}

export function percent(calculator) {
    const output = document.getElementById('output');
    if (!numberValidation(calculator.currentValue, output.value)) return;
    else if (calculator.currentOperator === '') {
        output.value = output.value / 100;
    } else {
        output.value = (Number(calculator.currentValue) * Number(output.value)) / 100;
    }

}

export function equal(calculator) {
    operationsSwitch(calculator);
    calculator.operatorActive = true;
    calculator.newNumber = true;
    calculator.equalCounter = calculator.equalCounter + 1;
}