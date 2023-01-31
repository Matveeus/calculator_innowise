/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://calculator_level0/./src/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operators */ \"./src/operators.js\");\n/* harmony import */ var _numbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./numbers */ \"./src/numbers.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    // const calculator = {\r\n    //     \"currentOperator\": \"\",\r\n    //     \"currentValue\": 0,\r\n    //     \"operatorActive\": false,\r\n    //     \"newNumber\": true,\r\n    //     \"maxOutputLength\": 12\r\n    // }\r\n    const calculator = new Calculator(\"\", 0, false, true, 14, 0);\r\n    (0,_operators__WEBPACK_IMPORTED_MODULE_1__.operatorsInit)(calculator);\r\n    (0,_numbers__WEBPACK_IMPORTED_MODULE_2__.numbersInit)(calculator);\r\n});\r\n\r\nclass Calculator{\r\n    constructor(currentOperator, currentValue, operatorActive, newNumber, maxOutputLength, equalCounter) {\r\n        this.currentOperator = currentOperator;\r\n        this.currentValue = currentValue;\r\n        this.operatorActive = operatorActive;\r\n        this.newNumber = newNumber;\r\n        this.maxOutputLength = maxOutputLength;\r\n        this.equalCounter = equalCounter;\r\n    }\r\n}\n\n//# sourceURL=webpack://calculator_level0/./src/index.js?");

/***/ }),

/***/ "./src/numbers.js":
/*!************************!*\
  !*** ./src/numbers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"numbersInit\": () => (/* binding */ numbersInit)\n/* harmony export */ });\nfunction appendNumber(calculator, appendValue) {\r\n    const output = document.getElementById('output');\r\n    const outputValue = output.value;\r\n    if (appendValue.trim() === '.') {\r\n        if (calculator.newNumber === true) {\r\n            output.value = 0 + appendValue;\r\n        } else if (!outputValue.includes('.')) {\r\n            output.value += appendValue;\r\n        }\r\n        return;\r\n    } if (outputValue === '0' || calculator.newNumber === true) {\r\n        output.value = appendValue;\r\n        return;\r\n    }\r\n    if (outputValue.toString().length <= calculator.maxOutputLength) {\r\n        output.value += appendValue;\r\n    }\r\n}\r\n\r\nfunction handleNumberClick(clickedButton, calculator) {\r\n    appendNumber(calculator, clickedButton);\r\n    calculator.newNumber = false;\r\n    calculator.operatorActive = false;\r\n    if(calculator.equalCounter > 0){\r\n        calculator.currentValue = 0;\r\n        calculator.equalCounter = 0;\r\n        calculator.currentOperator = \"\";\r\n    }\r\n    // calculator.currentValue = \"\";\r\n}\r\n\r\nfunction numbersInit(calculator) {\r\n    const numbers = document.querySelectorAll('.key-number');\r\n    numbers.forEach((number) => {\r\n        number.addEventListener('click', function (e){\r\n            handleNumberClick(e.target.value, calculator);\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack://calculator_level0/./src/numbers.js?");

/***/ }),

/***/ "./src/operations.js":
/*!***************************!*\
  !*** ./src/operations.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"equal\": () => (/* binding */ equal),\n/* harmony export */   \"operationsSwitch\": () => (/* binding */ operationsSwitch),\n/* harmony export */   \"percent\": () => (/* binding */ percent),\n/* harmony export */   \"switchSignFunction\": () => (/* binding */ switchSignFunction)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\nfunction operationsSwitch(calculator) {\r\n    const output = document.getElementById('output');\r\n    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.numberValidation)(calculator.currentValue, output.value)) return;\r\n    let outputBeforeOperation = output.value;\r\n    switch (calculator.currentOperator) {\r\n        case '+':\r\n            output.value = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.transformInt)(Number(calculator.currentValue) + Number(output.value));\r\n            break;\r\n        case '-':\r\n            output.value = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.transformInt)(calculator.equalCounter === 0 ?\r\n                (Number(calculator.currentValue) - Number(output.value)) :\r\n                (Number(output.value) - Number(calculator.currentValue)));\r\n            break;\r\n        case '*':\r\n            output.value = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.transformInt)(Number(calculator.currentValue) * Number(output.value));\r\n            break;\r\n        case '/':\r\n            if (Number(output.value) === 0) {\r\n                output.value = 'Error';\r\n            } else {\r\n                output.value = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.transformInt)(calculator.equalCounter === 0 ?\r\n                    (Number(calculator.currentValue) / Number(output.value)) :\r\n                    (Number(output.value) / Number(calculator.currentValue)));\r\n            }\r\n            break;\r\n        default:\r\n            //eslint-disable-next-line no-useless-return\r\n            return;\r\n    }\r\n    if(calculator.equalCounter === 0){\r\n        calculator.currentValue = outputBeforeOperation;\r\n    }\r\n}\r\n\r\nfunction clear(calculator) {\r\n    const output = document.getElementById('output');\r\n    calculator.currentOperator = '';\r\n    calculator.currentValue = 0;\r\n    output.value = 0;\r\n}\r\n\r\nfunction switchSignFunction() {\r\n    const output = document.getElementById('output');\r\n    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.numberValidation)(output.value)) return;\r\n    output.value = Number(output.value) * (-1);\r\n}\r\n\r\nfunction percent(calculator) {\r\n    const output = document.getElementById('output');\r\n    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.numberValidation)(calculator.currentValue, output.value)) return;\r\n    else if (calculator.currentOperator === '') {\r\n        output.value = output.value / 100;\r\n    } else {\r\n        output.value = (Number(calculator.currentValue) * Number(output.value)) / 100;\r\n    }\r\n\r\n}\r\n\r\nfunction equal(calculator) {\r\n    operationsSwitch(calculator);\r\n    calculator.operatorActive = true;\r\n    calculator.newNumber = true;\r\n    calculator.equalCounter = calculator.equalCounter + 1;\r\n}\n\n//# sourceURL=webpack://calculator_level0/./src/operations.js?");

/***/ }),

/***/ "./src/operators.js":
/*!**************************!*\
  !*** ./src/operators.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"operatorsInit\": () => (/* binding */ operatorsInit)\n/* harmony export */ });\n/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations */ \"./src/operations.js\");\n\r\n\r\n\r\nfunction handleOperatorClick(clickedOperator, calculator) {\r\n    const output = document.getElementById('output');\r\n    if (calculator.operatorActive === true) {\r\n        calculator.currentOperator = clickedOperator;\r\n        calculator.currentValue = output.value;\r\n        return;\r\n    }\r\n    if (calculator.currentOperator !== '') {\r\n        (0,_operations__WEBPACK_IMPORTED_MODULE_0__.operationsSwitch)(calculator);\r\n    }\r\n    calculator.operatorActive = true;\r\n    calculator.currentValue = output.value;\r\n    calculator.currentOperator = clickedOperator;\r\n    calculator.newNumber = true;\r\n\r\n}\r\n\r\nfunction operatorsInit(calculator) {\r\n    const operators = document.querySelectorAll('.key-operator');\r\n    operators.forEach((operator) => {\r\n        operator.addEventListener('click', function (e){\r\n            handleOperatorClick(e.target.value, calculator);\r\n            calculator.equalCounter = 0;\r\n        });\r\n    });\r\n    const clearButton = document.getElementById('clear');\r\n    clearButton.addEventListener('click', function (){\r\n        (0,_operations__WEBPACK_IMPORTED_MODULE_0__.clear)(calculator);\r\n        calculator.equalCounter = 0;\r\n    });\r\n    const switchSign = document.getElementById('switch_sign');\r\n    switchSign.addEventListener('click', _operations__WEBPACK_IMPORTED_MODULE_0__.switchSignFunction);\r\n    const equalSign = document.getElementById('equal');\r\n    equalSign.addEventListener('click', function () {\r\n        (0,_operations__WEBPACK_IMPORTED_MODULE_0__.equal)(calculator);\r\n    });\r\n    const percentSign = document.getElementById('percent');\r\n    percentSign.addEventListener('click', function () {\r\n        (0,_operations__WEBPACK_IMPORTED_MODULE_0__.percent)(calculator);\r\n        calculator.equalCounter = 0;\r\n    });\r\n}\n\n//# sourceURL=webpack://calculator_level0/./src/operators.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"numberValidation\": () => (/* binding */ numberValidation),\n/* harmony export */   \"round\": () => (/* binding */ round),\n/* harmony export */   \"transformInt\": () => (/* binding */ transformInt)\n/* harmony export */ });\nfunction round(num, precision = 5) {\r\n    const str = num.toString();\r\n    const decimalIndex = str.indexOf('.');\r\n    if (precision === 0 || decimalIndex === -1 || Number(str.split('.')[1]) === 0) {\r\n        return str.split('.')[0];\r\n    }\r\n    return str.substring(0, decimalIndex + precision + 1);\r\n}\r\n\r\nfunction transformInt(number, maxOutputLength = 14, maxDigitsAfterDot = 4) {\r\n    if (number.toString().length >= maxOutputLength) {\r\n        number = number.toExponential(2);\r\n        return round(number, maxDigitsAfterDot);\r\n    } else {\r\n        number = number.toFixed(maxOutputLength);\r\n        return round(+number, maxDigitsAfterDot);\r\n    }\r\n}\r\n\r\nfunction numberValidation(...args) {\r\n    for (const element of args) {\r\n        if (isNaN(element)) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\n\n\n//# sourceURL=webpack://calculator_level0/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;