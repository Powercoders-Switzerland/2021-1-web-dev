"use strict";
// Retrieve the HTML elements that we need from the DOM.
const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const resultSpan = document.getElementById("result");
// Check that the HTML elements that we need exist, and that they are of the correct types.
if (!aInput || !(aInput instanceof HTMLInputElement)) {
    throw new Error("No input with id 'a' found");
}
if (!bInput || !(bInput instanceof HTMLInputElement)) {
    throw new Error("No input with id 'b' found");
}
if (!resultSpan || !(resultSpan instanceof HTMLSpanElement)) {
    throw new Error("No span with id 'result' found");
}
/**
 * Adds two numbers.
 */
const add = (a, b) => a + b;
/**
 * Reads the value of an input element as a number.
 *
 * If the value cannot be parsed as a number, `0` is returned.
 */
const readInputInteger = (input) => {
    const result = parseInt(input.value);
    return isNaN(result) ? 0 : result;
};
/**
 * Updates the display of the result.
 */
const updateResult = () => {
    const result = add(readInputInteger(aInput), readInputInteger(bInput));
    resultSpan.textContent = result.toString();
};
aInput.addEventListener("input", updateResult);
bInput.addEventListener("input", updateResult);
// Compute the result on page load.
updateResult();
