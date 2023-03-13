import { numberValidation, transformInt } from './utils';

const output = document.getElementById('output');

/////// function to calculate root ///////
function power(x, y) {
    let result = 1;
    for (let i = 0; i < y; i += 1) {
        result *= x;
    }
    return result;
}

function root(x, y) {
    const precision = 0.0001;
    let estimate = x;
    while ((x - power(estimate, y)) * (x - power(estimate, y)) > precision * precision) {
        estimate = ((y - 1) * estimate + x / power(estimate, y - 1)) / y;
    }
    return estimate;
}
//////////////////////////////////////////

export class Command {
    constructor(calculator) {
        this.calculator = calculator;
    }
    execute() {}
    undo() {}
}

export class AddCommand extends Command {
    execute(calculator) {
        console.log("output: " + output.value + " current value: " + calculator.currentValue+ " equal: " + calculator.equalCounter + " ADD")
        output.value = transformInt(Number(calculator.currentValue) + Number(output.value));
    }
    undo(calculator) {
        console.log(calculator.valueBeforeOperation + " output: " + output.value)
        output.value = transformInt(Number(output.value) - Number(calculator.valueBeforeOperation.pop()));
    }
}

export class SubtractCommand extends Command {
    execute(calculator) {
        console.log("output: " + output.value + " current value: " + calculator.currentValue + " equal: " + calculator.equalCounter + " SUBTRACT")
        output.value = transformInt(calculator.equalCounter === 0
            ? (Number(calculator.currentValue) - Number(output.value))
            : (Number(output.value) - Number(calculator.currentValue)));
    }
    undo(calculator) {
        output.value = transformInt(Number(output.value) + Number(calculator.valueBeforeOperation.pop()));
    }
}

export class MultiplyCommand extends Command {
    execute(calculator) {
        output.value = transformInt(Number(calculator.currentValue) * Number(output.value));
    }
    undo(calculator, value) {
        output.value = transformInt(Number(output.value) / Number(calculator.valueBeforeOperation.pop()));
    }
}

export class DivideCommand extends Command {
    execute(calculator) {
        console.log(" current: " + calculator.currentValue + " output: " + output.value)
        if (Number(output.value) === 0) {
            output.value = 'Error';
        } else {
            output.value = transformInt(calculator.equalCounter === 0
                ? (Number(calculator.currentValue) / Number(output.value))
                : (Number(output.value) / Number(calculator.currentValue)));
        }
    }
    undo(calculator, value) {
        output.value = transformInt(Number(output.value) * Number(calculator.valueBeforeOperation.pop()));
    }
}

export class ExponentiationCommand extends Command {
    execute(calculator) {
        output.value = transformInt(calculator.equalCounter === 0
            ? (Number(calculator.currentValue) ** Number(output.value))
            : (Number(output.value) ** Number(calculator.currentValue)));
    }
    undo(calculator, value) {
        const x = calculator.equalCounter === 0 ? output.value : calculator.valueBeforeOperation;
        const y = calculator.equalCounter === 0 ? calculator.valueBeforeOperation.pop() : output.value;
        console.log(x, y)
        output.value = transformInt(root(x, y));
    }
}

export class yRootCommand extends Command {
    execute(calculator) {
        const x = calculator.equalCounter === 0 ? calculator.currentValue : output.value;
        const y = calculator.equalCounter === 0 ? output.value : calculator.currentValue;
        output.value = transformInt(root(x, y));
    }
    undo(calculator, value) {
        output.value = transformInt(calculator.equalCounter === 0
            ? (Number(Number(output.value)  ** calculator.valueBeforeOperation.pop()))
            : (Number(output.value) ** Number(calculator.valueBeforeOperation.pop())));
    }
}

export class ClearCommand extends Command {
    constructor(calculator) {
        super(calculator);
        this.previousValue = calculator.currentValue;
        this.previousOperator = calculator.currentOperator;
        this.previousNewNumber = output.value;
    }
    execute() {
        this.calculator.valueBeforeOperation.push(output.value)
        output.value = 0;
        this.calculator.currentOperator = '';
        this.calculator.currentValue = 0;
    }
    undo() {
        output.value = this.calculator.valueBeforeOperation.pop();
        this.calculator.currentOperator = this.previousOperator;
        this.calculator.currentValue = this.previousValue;
        this.calculator.newNumber = this.previousNewNumber;
    }
}

export class SwitchSignCommand extends Command {
    execute() {
        if (!numberValidation(output.value)) return;
        this.calculator.valueBeforeOperation.push(output.value)
        output.value = output.value * (-1);
    }
    undo() {
        output.value = this.calculator.valueBeforeOperation.pop();
    }
}

export class PercentCommand extends Command {
    execute(calculator) {
        if (!numberValidation(calculator.currentValue, output.value)) return;
        if (calculator.currentOperator === '' || calculator.operatorActive === true) {
            output.value /= 100;
            calculator.valueBeforeOperation.push(output.value)
        } else {
            calculator.valueBeforeOperation.push(output.value)
            output.value = (Number(calculator.currentValue) * Number(output.value)) / 100;
        }
    }
    undo(calculator) {
        console.log(calculator.history)
        if (calculator.operatorActive === false) {
            console.log(calculator.history)
            output.value = 100 * calculator.valueBeforeOperation.pop();
        } else {
            calculator.valueBeforeOperation.pop()
            calculator.undoCommand();
        }
    }
}


// //PRO operators
//
// export function memoryAdd(calculator) {
//     calculator.memoryValue += Number(output.value);
// }
//
// export function memorySubtract(calculator) {
//     calculator.memoryValue -= Number(output.value);
// }
//
// export function memoryClear(calculator) {
//     calculator.memoryValue = 0;
// }
//
// export function memoryRecall(calculator) {
//     output.value = calculator.memoryValue;
// }
//
// export function squareFunction() {
//     output.value = Number(output.value) ** 2;
// }
//
// export function cubeFunction() {
//     output.value = Number(output.value) ** 3;
// }
//
// export function eToPowerFunction() {
//     output.value = 2.7182818011463845 ** Number(output.value);
// }
//
// export function tenToPowerFunction() {
//     output.value = 10 ** Number(output.value);
// }
//
// export function oneXthFunction() {
//     if (Number(output.value) === 0) {
//         output.value = 'Error';
//     } else {
//         output.value = 1 / Number(output.value);
//     }
// }
//
// export function squareRootFunction() {
//     if (Number(output.value) < 0) {
//         output.value = 'Error';
//     } else if (Number(output.value) === 0) {
//         output.value = 0;
//     } else {
//         let result; let
// x = Number(output.value) / 2;
//         do {
//             result = x;
//             x = (result + (Number(output.value) / result)) / 2;
//         } while (result !== x);
//         output.value = result;
//     }
// }
//
// export function cubeRootFunction() {
//     if (Number(output.value) === 0) {
//         output.value = 0;
//     } else {
//         let result; let
// x = Number(output.value) / 2;
//         do {
//             result = x;
//             x = (Number(output.value) / (x * x) + (x * 2)) / 3;
//         } while (result !== x);
//         output.value = result;
//     }
// }
//
// export function factorialFunction() {
//     if (Number(output.value) < 0) {
//         output.value = 'Error';
//     } else if (Number(output.value) === 0) {
//         output.value = 1;
//     } else {
//         for (let i = Number(output.value) - 1; i > 0; i -= 1) {
//             output.value = Number(output.value) * i;
//         }
//     }
// }
//
// export function piValue() {
//     output.value = 3.14159265359;
// }
//
// export function eValue() {
//     output.value = 2.71828182846;
// }

