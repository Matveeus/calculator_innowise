function switchTheme() {
    const calculator = document.querySelector('.body');
    calculator.classList.toggle('day-theme');
}
const themeSwitch = document.getElementById('switch-theme-button');
themeSwitch.addEventListener('click', switchTheme);
