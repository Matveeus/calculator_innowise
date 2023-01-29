# Pure javascript calculator
A simple calculator built using HTML, CSS and JavaScript

Final build: https://dev8022.d3qhj1ges7gz6t.amplifyapp.com/


## 1. Task
#### Task link: https://github.com/Matveeus/calculator_innowise/blob/main/%D1%82%D0%B7%20react.pdf

## 2. How to run the app
#### To start the app, there is a script in package.json called "start". 
To start the program type "npm start" in terminal. This command will open app in your browser.
Script "build" create the final build in dist folder.

The final build includes two files: index.html (also contains styles from /src/styles.css) and main.js (contains calculator js code itself and function to switch theme).

### Calculator functions description:
Functions "numbersInit()" and "operatorsInit()" initialize all buttons (numbers and operators).

Function "handleNumberClick()" and "handleOperatorClick()" handle clicks on numbers and operators.

Function "appendNumber()" append numbers into output field.

Function "operationsSwitch()" makes all main operation (addition subtraction multiplication and division);

Other operations make "clear()", "percent()", "switchSignFunction()" and "equal()";

"NumberValidation()" function checks if argument is number;

"round()" function rounds float numbers;

"bigInt()" function transform numbers over 12 digits.

## 3. Files
Folder "src" includes all main development files: index.html, index.js, styles.css. Note: in the final build CSS styles include into index.html thanks to webpack.
