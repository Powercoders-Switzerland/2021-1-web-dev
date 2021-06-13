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

eval("\n// Solution for all steps.\nconst appDiv = document.getElementById(\"app\");\nif (!(appDiv instanceof HTMLDivElement)) {\n    throw new Error(\"No div with id 'app' found\");\n}\n/**\n * Initial state of our app.\n */\nconst initialState = {\n    todos: [\n        {\n            name: \"Learn HTML\",\n            done: true,\n        },\n        {\n            name: \"Learn CSS\",\n            done: true,\n        },\n        {\n            name: \"Learn React\",\n            done: false,\n        },\n    ],\n    filter: \"All\",\n};\n// Compute the initial state. If one has been saved in localStorage,\n// read it. Otherwise, we start with the initial state.\nconst storedState = localStorage.getItem(\"state\");\nlet state = storedState\n    ? JSON.parse(storedState)\n    : initialState;\n/**\n * Save our application's state to local storage.\n */\nconst saveState = () => localStorage.setItem(\"state\", JSON.stringify(state));\n/**\n * Sort todo items by their names.\n */\nconst sortTodos = () => state.todos.sort((a, b) => a.name.localeCompare(b.name));\n/**\n * Returns the todos, filtered according to the current filter.\n */\nconst filteredTodos = () => {\n    switch (state.filter) {\n        case \"All\":\n            return state.todos;\n        case \"Done\":\n            return state.todos.filter((it) => it.done);\n        case \"To do\":\n            return state.todos.filter((it) => !it.done);\n        default:\n            throw new Error(\"Unexpected filter.\");\n    }\n};\n/**\n * Renders the application.\n */\nconst render = () => {\n    appDiv.innerHTML = \"\";\n    const filterSelect = document.createElement(\"select\");\n    for (const filter of [\"All\", \"Done\", \"To do\"]) {\n        const filterOption = document.createElement(\"option\");\n        filterOption.innerText = filter;\n        filterOption.selected = filter === state.filter;\n        filterSelect.appendChild(filterOption);\n    }\n    filterSelect.addEventListener(\"change\", (event) => {\n        event.preventDefault();\n        state.filter = filterSelect.value;\n        saveState();\n        render();\n    });\n    appDiv.appendChild(filterSelect);\n    const numbersUl = document.createElement(\"ul\");\n    for (const todo of filteredTodos()) {\n        const todoLi = document.createElement(\"li\");\n        const todoLabel = document.createElement(\"label\");\n        const doneInput = document.createElement(\"input\");\n        doneInput.setAttribute(\"type\", \"checkbox\");\n        doneInput.checked = todo.done;\n        doneInput.addEventListener(\"change\", (event) => {\n            event.preventDefault();\n            todo.done = !todo.done;\n            saveState();\n            render();\n        });\n        todoLabel.appendChild(doneInput);\n        todoLabel.appendChild(document.createTextNode(todo.name));\n        todoLi.appendChild(todoLabel);\n        numbersUl.appendChild(todoLi);\n    }\n    appDiv.appendChild(numbersUl);\n    const addInput = document.createElement(\"input\");\n    addInput.setAttribute(\"type\", \"text\");\n    const addButton = document.createElement(\"input\");\n    addButton.setAttribute(\"type\", \"submit\");\n    addButton.setAttribute(\"value\", \"Add #\" + (state.todos.length + 1));\n    const addForm = document.createElement(\"form\");\n    addForm.appendChild(addInput);\n    addForm.appendChild(addButton);\n    addForm.addEventListener(\"submit\", (event) => {\n        event.preventDefault();\n        state.todos.push({ name: addInput.value, done: false });\n        sortTodos();\n        saveState();\n        render();\n    });\n    appDiv.appendChild(addForm);\n};\n// Render the app on page load.\nrender();\n\n\n//# sourceURL=webpack://03-todo-list/./src/main.ts?");

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