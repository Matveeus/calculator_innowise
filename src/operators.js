import {
    AddCommand, SubtractCommand, MultiplyCommand, DivideCommand, ClearCommand,
    ExponentiationCommand, yRootCommand, SwitchSignCommand, PercentCommand
} from './operations';
const output = document.getElementById('output');

function operationsSwitch(calculator) {
    const outputBeforeOperation = output.value;
    switch (calculator.currentOperator) {
        case '+':
            calculator.command = new AddCommand(calculator);
            break;
        case '-':
            calculator.command = new SubtractCommand(calculator);
            break;
        case '*':
            calculator.command = new MultiplyCommand(calculator);
            break;
        case '/':
            calculator.command = new DivideCommand(calculator);
            break;
        case 'exponentiation':
            calculator.command = new ExponentiationCommand(calculator);
            break;
        case 'y_root':
            calculator.command = new yRootCommand(calculator);
            break;
    }
    if (calculator.equalCounter === 0) {
        calculator.valueBeforeOperation.push(output.value);
    } else {
        calculator.valueBeforeOperation.push(calculator.currentValue);
    }
    calculator.executeCommand(calculator.command);
    if (calculator.equalCounter === 0) {
        calculator.currentValue = outputBeforeOperation;
    }
}

function handleOperatorClick(clickedOperator, calculator) {
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

    const equalButton = document.getElementById('equal');
    equalButton.addEventListener('click', () => {
        operationsSwitch(calculator)
        calculator.operatorActive = true;
        calculator.newNumber = true;
        calculator.equalCounter += 1;
    });

    const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', () => {
        calculator.command = new ClearCommand(calculator);
        calculator.executeCommand(calculator.command);
        calculator.equalCounter = 0;
    });

    const switchSignButton = document.getElementById('switch_sign');
    switchSignButton.addEventListener('click', () => {
        calculator.command = new SwitchSignCommand(calculator);
            calculator.executeCommand(calculator.command);
    });

    const percentSign = document.getElementById('percent');
    percentSign.addEventListener('click', () => {
        calculator.command = new PercentCommand(calculator);
        calculator.executeCommand(calculator.command);
        calculator.equalCounter = 0;
    });
}




//     const addToMemory = document.getElementById('memory_add');
//     addToMemory.addEventListener('click', () => {
//         memoryAdd(calculator);
//     });
//     const subtractFromMemory = document.getElementById('memory_subtract');
//     subtractFromMemory.addEventListener('click', () => {
//         memorySubtract(calculator);
//     });
//     const clearMemory = document.getElementById('memory_clear');
//     clearMemory.addEventListener('click', () => {
//         memoryClear(calculator);
//     });
//     const recallMemory = document.getElementById('memory_recall');
//     recallMemory.addEventListener('click', () => {
//         memoryRecall(calculator);
//     });
//     const square = document.getElementById('square');
//     square.addEventListener('click', () => {
//         squareFunction();
//     });
//     const cube = document.getElementById('cube');
//     cube.addEventListener('click', () => {
//         cubeFunction();
//     });
//     const ePower = document.getElementById('e_to_power');
//     ePower.addEventListener('click', () => {
//         eToPowerFunction();
//     });
//     const tenPower = document.getElementById('10_to_power');
//     tenPower.addEventListener('click', () => {
//         tenToPowerFunction();
//     });
//     const oneXth = document.getElementById('one_x-th');
//     oneXth.addEventListener('click', () => {
//         oneXthFunction();
//     });
//     const squareRoot = document.getElementById('square_root');
//     squareRoot.addEventListener('click', () => {
//         squareRootFunction();
//     });
//     const cubeRoot = document.getElementById('cube_root');
//     cubeRoot.addEventListener('click', () => {
//         cubeRootFunction();
//     });
//     const factorial = document.getElementById('factorial');
//     factorial.addEventListener('click', () => {
//         factorialFunction();
//     });
//     const pi = document.getElementById('pi');
//     pi.addEventListener('click', () => {
//         piValue();
//     });
//     const e = document.getElementById('e');
//     e.addEventListener('click', () => {
//         eValue();
//     });*/
// }
