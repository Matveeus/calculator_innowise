import './styles.css'

import { operatorsInit } from './operators';
import { numbersInit } from './numbers';


document.addEventListener('DOMContentLoaded', () => {
    // const calculator = {
    //     "currentOperator": "",
    //     "currentValue": 0,
    //     "operatorActive": false,
    //     "newNumber": true,
    //     "maxOutputLength": 12
    // }
    const calculator = new Calculator("", 0, false, true, 14, 0);
    operatorsInit(calculator);
    numbersInit(calculator);
});

class Calculator{
    constructor(currentOperator, currentValue, operatorActive, newNumber, maxOutputLength, equalCounter) {
        this.currentOperator = currentOperator;
        this.currentValue = currentValue;
        this.operatorActive = operatorActive;
        this.newNumber = newNumber;
        this.maxOutputLength = maxOutputLength;
        this.equalCounter = equalCounter;
    }
}