export function switchMode() {
    const calculator = document.querySelector('.calculator-container');
    const zero = document.querySelector('.zero');
    calculator.classList.toggle('pro');
    zero.classList.toggle('no-radius');
    if (switchCalculatorMode.innerText === "More") {
        switchCalculatorMode.innerText = "Close";
    } else {
        switchCalculatorMode.innerText = "More";
    }
}

const switchCalculatorMode = document.getElementById('show-operations');
switchCalculatorMode.addEventListener('click', switchMode);