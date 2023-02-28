export function transformInt(number) {
    if (number >= 1e+9 || number <= -1e+9 || (number >= -1e-9 && number <= 1e-9 && number !== 0)) {
        let formatted = number.toExponential(5);
        return formatted.replace(/(\.\d*?)0+e/, '$1e').replace(/\.e/, 'e');
    } else {
        let rounded = number.toFixed(8);
        if (Number.isInteger(parseFloat(rounded))) {
            return parseFloat(rounded);
        } else {
            return parseFloat(rounded.toString().replace(/(\.\d*?)0+$/, '$1'));
        }
    }
}

export function numberValidation(...args) {
    for (const element of args) {
        if (isNaN(element)) {
            return false;
        }
    }
    return true;
}
