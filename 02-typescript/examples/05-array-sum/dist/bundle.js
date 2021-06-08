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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("\nconst appDiv = document.getElementById(\"app\");\nif (!(appDiv instanceof HTMLDivElement)) {\n    throw new Error(\"No div with id 'app' found\");\n}\n// This is the state of our application. We set the initial state to an array\n// containing the numbers 1, 2 and 3.\nlet numbers = [1, 2, 3];\n/**\n * Reads the value of an input element as a number.\n *\n * If the value cannot be parsed as a number, `0` is returned.\n */\nconst readInputInteger = (input) => {\n    const result = parseInt(input.value);\n    return isNaN(result) ? 0 : result;\n};\n/**\n * Computes the sum of an array of numbers.\n */\nconst sumArray = (numbers) => {\n    let sum = 0;\n    for (const number of numbers) {\n        sum += number;\n    }\n    return sum;\n};\n/**\n * Renders the application.\n */\nconst render = () => {\n    appDiv.innerHTML = \"\";\n    const numbersUl = document.createElement(\"ul\");\n    for (const number of numbers) {\n        const numberLi = document.createElement(\"li\");\n        numberLi.textContent = number.toString();\n        numbersUl.appendChild(numberLi);\n    }\n    const addInput = document.createElement(\"input\");\n    addInput.setAttribute(\"type\", \"number\");\n    const addButton = document.createElement(\"input\");\n    addButton.setAttribute(\"type\", \"submit\");\n    addButton.setAttribute(\"value\", \"Add Number #\" + (numbers.length + 1));\n    const addForm = document.createElement(\"form\");\n    addForm.appendChild(addInput);\n    addForm.appendChild(addButton);\n    addForm.addEventListener(\"submit\", (event) => {\n        event.preventDefault();\n        numbers.push(readInputInteger(addInput));\n        numbers.sort();\n        render();\n    });\n    const sumP = document.createElement(\"p\");\n    sumP.textContent = \"Sum: \" + sumArray(numbers);\n    appDiv.appendChild(numbersUl);\n    appDiv.appendChild(addForm);\n    appDiv.appendChild(sumP);\n};\n// Render the app on page load.\nrender();\n\n\n//# sourceURL=webpack://05-array-sum/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;