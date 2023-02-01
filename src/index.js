import './styles.css';
import './theme';

import { operatorsInit } from './operators';
import { numbersInit } from './numbers';

class Calculator {
    // eslint-disable-next-line max-len
    constructor(currentOperator, currentValue, operatorActive, newNumber, maxOutputLength, equalCounter) {
        this.currentOperator = currentOperator;
        this.currentValue = currentValue;
        this.operatorActive = operatorActive;
        this.newNumber = newNumber;
        this.maxOutputLength = maxOutputLength;
        this.equalCounter = equalCounter;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator('', 0, false, true, 14, 0);
    operatorsInit(calculator);
    numbersInit(calculator);
});
