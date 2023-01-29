import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    let currentOperator = '';
    let currentValue = 0;
    const output = document.getElementById('output');
    let newNumber = true;
    let operatorActive = false;
    const maxOutputLength = 12;
    const maxDigitsAfterDot = 5;

    function appendNumber(appendValue) {
        const outputValue = output.value;
        if (appendValue.trim() === '.') {
            if (newNumber === true) {
                output.value = 0 + appendValue;
            } else if (!outputValue.includes('.')) {
                output.value += appendValue;
            }
            return;
        } if (outputValue === '0' || newNumber === true) {
            output.value = appendValue;
            return;
        }
        if (outputValue.toString().length <= maxOutputLength) {
            output.value += appendValue;
        }
    }

    function round(num, precision) {
        const str = num.toString();
        const decimalIndex = str.indexOf('.');
        if (precision === 0 || decimalIndex === -1 || Number(str.split('.')[1]) === 0) {
            return str.split('.')[0];
        }
        return str.substring(0, decimalIndex + precision + 1);
    }

    function handleNumberClick(event) {
        const clickedButton = event.target.value;
        appendNumber(clickedButton);
        newNumber = false;
        operatorActive = false;
    }

    function numberValidation(...args) {
        for (const element of args) {
            if (isNaN(element)) {
                return false;
            }
        }
        return true;
    }

    function bigInt(number) {
        if (number.toString().length >= maxOutputLength) {
            number = number.toExponential(2);
            return round(number, maxDigitsAfterDot);
        } else {
            number = number.toFixed(maxOutputLength);
            return round(+number, maxDigitsAfterDot);
        }

    }

    function operationsSwitch() {
        if (!numberValidation(currentValue, output.value)) return;
        switch (currentOperator) {
            case '+':
                output.value = bigInt(Number(currentValue) + Number(output.value));
                break;
            case '-':
                output.value = bigInt(Number(currentValue) - Number(output.value));
                break;
            case '*':
                output.value = bigInt(Number(currentValue) * Number(output.value));
                break;
            case '/':
                if (Number(output.value) === 0) {
                    output.value = 'Error';
                } else {
                    output.value = bigInt(Number(currentValue) / Number(output.value));
                }

                break;
            default:
                //eslint-disable-next-line no-useless-return
                return;
        }
    }

    function handleOperatorClick(event) {
        const clickedOperator = event.target.value;
        if (operatorActive === true) {
            currentOperator = clickedOperator;
            currentValue = output.value;
            return;
        }
        if (currentOperator !== '') {
            operationsSwitch();
            currentOperator = '';
        }
        currentValue = output.value;
        currentOperator = clickedOperator;
        operatorActive = true;
        newNumber = true;
    }

    function numbersInit() {
        const numbers = document.querySelectorAll('.key-number');
        numbers.forEach((number) => {
            number.addEventListener('click', handleNumberClick);
        });
    }

    function clear() {
        currentOperator = '';
        currentValue = 0;
        output.value = 0;
    }

    function switchSignFunction() {
        if (!numberValidation(output.value)) return;
        output.value = Number(output.value) * (-1);
    }

    function percent() {
        if (!numberValidation(currentValue, output.value)) return;
        else if (currentOperator === '') {
            output.value = output.value / 100;
        } else {
            output.value = (Number(currentValue) * Number(output.value)) / 100;
        }

    }

    function equal() {
        operationsSwitch();
        operatorActive = true;
        newNumber = true;
    }

    function operatorsInit() {
        const operators = document.querySelectorAll('.key-operator');
        operators.forEach((operator) => {
            operator.addEventListener('click', handleOperatorClick);
        });
        const clearButton = document.getElementById('clear');
        clearButton.addEventListener('click', clear);
        const switchSign = document.getElementById('switch_sign');
        switchSign.addEventListener('click', switchSignFunction);
        const equalSign = document.getElementById('equal');
        equalSign.addEventListener('click', equal);
        const percentSign = document.getElementById('percent');
        percentSign.addEventListener('click', percent);
    }

    function init() {
        operatorsInit();
        numbersInit();
    }

    init();

    function switchTheme() {
        const calculator = document.querySelector('.body');
        calculator.classList.toggle('day-theme');
    }
    const themeSwitch = document.getElementById('switch-theme-button');
    themeSwitch.addEventListener('click', switchTheme);
});
