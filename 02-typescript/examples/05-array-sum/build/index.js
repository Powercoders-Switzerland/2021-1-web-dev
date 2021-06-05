"use strict";
// Retrieve the HTML element that we need from the DOM.
var appDiv = document.getElementById("app");
if (!appDiv || !(appDiv instanceof HTMLDivElement)) {
    throw new Error("No div with id 'app' found");
}
var numbers = [1, 2, 3];
/**
 * Reads the value of an input element as a number.
 *
 * If the value cannot be parsed as a number, `0` is returned.
 */
var readInputInteger = function (input) {
    var result = parseInt(input.value);
    return isNaN(result) ? 0 : result;
};
/**
 * Computes the sum of an array of numbers.
 */
var sumArray = function (numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        sum += number;
    }
    return sum;
};
/**
 * Renders the application.
 */
var render = function () {
    appDiv.innerHTML = "";
    var numbersUl = document.createElement("ul");
    for (var _i = 0, numbers_2 = numbers; _i < numbers_2.length; _i++) {
        var number = numbers_2[_i];
        var numberLi = document.createElement("li");
        numberLi.textContent = number.toString();
        numbersUl.appendChild(numberLi);
    }
    var addInput = document.createElement("input");
    addInput.setAttribute("type", "number");
    var addButton = document.createElement("input");
    addButton.setAttribute("type", "submit");
    addButton.setAttribute("value", "Add Number");
    var addForm = document.createElement("form");
    addForm.appendChild(addInput);
    addForm.appendChild(addButton);
    addForm.addEventListener("submit", function (event) {
        event.preventDefault();
        numbers.push(readInputInteger(addInput));
        render();
    });
    var sumP = document.createElement("p");
    sumP.textContent = "Sum: " + sumArray(numbers);
    appDiv.appendChild(numbersUl);
    appDiv.appendChild(addForm);
    appDiv.appendChild(sumP);
};
// Render the app on page load.
render();
