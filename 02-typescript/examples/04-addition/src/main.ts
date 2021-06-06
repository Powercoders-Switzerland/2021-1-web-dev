// Retrieve the HTML elements that we need from the DOM.
const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const resultSpan = document.getElementById("result");

// Check that the HTML elements that we need exist, and that they are of the correct types.
if (!(aInput instanceof HTMLInputElement)) {
	throw new Error("No input element with id 'a' found");
}
if (!(bInput instanceof HTMLInputElement)) {
	throw new Error("No input element with id 'b' found");
}
if (!(resultSpan instanceof HTMLSpanElement)) {
	throw new Error("No span element with id 'result' found");
}

/**
 * Adds two numbers.
 */
const add = (a: number, b: number) => a + b;

/**
 * Reads the value of an input element as a number.
 *
 * If the value cannot be parsed as a number, `0` is returned.
 */
const readInt = (input: HTMLInputElement) => {
	const result = parseInt(input.value);
	return isNaN(result) ? 0 : result;
};

/**
 * Updates the display of the result.
 */
const updateResult = () => {
	const result = add(readInt(aInput), readInt(bInput));
	resultSpan.textContent = result.toString();
};

aInput.addEventListener("input", updateResult);
bInput.addEventListener("input", updateResult);

// Compute the result on page load.
updateResult();
