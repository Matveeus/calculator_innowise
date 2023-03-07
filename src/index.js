import './styles.css';
import { switchTheme } from './theme';
import { switchMode } from './calculator_mode_toggle';
import { operatorsInit } from './operators';
import { numbersInit } from './numbers';

    class Calculator {
        // eslint-disable-next-line max-len
        constructor(currentOperator, currentValue, operatorActive, newNumber, maxOutputLength, equalCounter, memoryValue) {
            this.currentOperator = currentOperator;
            this.currentValue = currentValue;
            this.operatorActive = operatorActive;
            this.newNumber = newNumber;
            this.maxOutputLength = maxOutputLength;
            this.equalCounter = equalCounter;
            this.memoryValue = memoryValue;
            this.history = [];
        }
    }

document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator('', 0, false, true, 14, 0, 0);
    operatorsInit(calculator);
    numbersInit(calculator);
    switchTheme();
    switchMode();
});
