export function round(num, precision = 5) {
    const str = num.toString();
    const decimalIndex = str.indexOf('.');
    if (precision === 0 || decimalIndex === -1 || Number(str.split('.')[1]) === 0) {
        return str.split('.')[0];
    }
    return str.substring(0, decimalIndex + precision + 1);
}

export function transformInt(number, maxOutputLength = 14, maxDigitsAfterDot = 4) {
    if (number.toString().length >= maxOutputLength) {
        number = number.toExponential(2);
        return round(number, maxDigitsAfterDot);
    }
        number = number.toFixed(maxOutputLength);
        return round(+number, maxDigitsAfterDot);
}

export function numberValidation(...args) {
    for (const element of args) {
        if (isNaN(element)) {
            return false;
        }
    }
    return true;
}
