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

eval("\n// Solution for steps 1 to 4\n// Retrieve the HTML elements that we need from the DOM.\nconst celsiusInput = document.getElementById(\"celsius\");\nconst fahrenheitInput = document.getElementById(\"fahrenheit\");\n// Check that the HTML elements that we need exist, and that they are of the correct types.\nif (!(celsiusInput instanceof HTMLInputElement)) {\n    throw new Error(\"No input with id 'celsius' found\");\n}\nif (!(fahrenheitInput instanceof HTMLInputElement)) {\n    throw new Error(\"No input with id 'fahrenheit' found\");\n}\n/**\n * Converts celsius degrees to fahrenheit degrees.\n */\nconst celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;\n/**\n * Converts fahrenheit degrees to celsius degrees.\n */\nconst fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;\n/**\n * Reads the value of an input element as a number.\n *\n * If the value cannot be parsed as a number, `0` is returned.\n */\nconst readInputFloat = (input) => {\n    const result = parseFloat(input.value);\n    return isNaN(result) ? 0 : result;\n};\n/**\n * Handles a change in the fahrenheit value by updating the celcius value.\n */\nconst handleFahrenheitInput = () => {\n    const result = fahrenheitToCelsius(readInputFloat(fahrenheitInput));\n    celsiusInput.value = result.toFixed(2);\n};\n/**\n * Handles a change in the celcius value by updating the fahrenheit value.\n */\nconst handleCelsiusInput = () => {\n    const result = celsiusToFahrenheit(readInputFloat(celsiusInput));\n    fahrenheitInput.value = result.toFixed(2);\n};\nfahrenheitInput.addEventListener(\"input\", handleFahrenheitInput);\ncelsiusInput.addEventListener(\"input\", handleCelsiusInput);\n// Compute the result on page load.\nhandleCelsiusInput();\n\n\n//# sourceURL=webpack://03-todo-list/./src/main.ts?");

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