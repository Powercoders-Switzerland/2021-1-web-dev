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

eval("\n// Retrieve the HTML elements that we need from the DOM.\nconst aInput = document.getElementById(\"a\");\nconst bInput = document.getElementById(\"b\");\nconst resultSpan = document.getElementById(\"result\");\n// Check that the HTML elements that we need exist, and that they are of the correct types.\nif (!(aInput instanceof HTMLInputElement)) {\n    throw new Error(\"No input element with id 'a' found\");\n}\nif (!(bInput instanceof HTMLInputElement)) {\n    throw new Error(\"No input element with id 'b' found\");\n}\nif (!(resultSpan instanceof HTMLSpanElement)) {\n    throw new Error(\"No span element with id 'result' found\");\n}\n/**\n * Adds two numbers.\n */\nconst add = (a, b) => a + b;\n/**\n * Reads the value of an input element as a number.\n *\n * If the value cannot be parsed as a number, `0` is returned.\n */\nconst readInt = (input) => {\n    const result = parseInt(input.value);\n    return isNaN(result) ? 0 : result;\n};\n/**\n * Updates the display of the result.\n */\nconst updateResult = () => {\n    const result = add(readInt(aInput), readInt(bInput));\n    resultSpan.textContent = result.toString();\n};\naInput.addEventListener(\"input\", updateResult);\nbInput.addEventListener(\"input\", updateResult);\n// Compute the result on page load.\nupdateResult();\n\n\n//# sourceURL=webpack://01-addition/./src/main.ts?");

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