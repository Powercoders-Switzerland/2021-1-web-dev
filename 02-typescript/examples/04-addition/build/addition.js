"use strict";
// Retrieve the HTML elements that we need from the DOM.
var aInput = document.getElementById("a");
var bInput = document.getElementById("b");
var resultSpan = document.getElementById("result");
// Check that the HTML elements that we need exist, and that they are of the correct types.
if (!aInput || !(aInput instanceof HTMLInputElement)) {
	throw new Error("No input with id 'a' found");
}
if (!bInput || !(bInput instanceof HTMLInputElement)) {
	throw new Error("No input with id 'b' found");
}
if (!resultSpan || !(bInput instanceof HTMLSpanElement)) {
	throw new Error("No span with id 'result' found");
}
/**
 * Adds two numbers.
 */
var add = function (a, b) {
	return a + b;
};
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
 * Updates the display of the result.
 */
var updateResult = function () {
	return (resultSpan.innerText = add(
		readInputInteger(aInput),
		readInputInteger(bInput)
	).toString());
};
aInput.addEventListener("input", updateResult);
bInput.addEventListener("input", updateResult);
// Compute the result on page load.
updateResult();
