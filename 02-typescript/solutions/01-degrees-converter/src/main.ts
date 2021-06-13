// Solution for step 1.

// Retrieve the HTML elements that we need from the DOM.
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput =
	document.getElementById("fahrenheit");

// Check that the HTML elements that we need exist, and that they are of the correct types.
if (!(celsiusInput instanceof HTMLInputElement)) {
	throw new Error("No input with id 'celsius' found");
}
if (!(fahrenheitInput instanceof HTMLInputElement)) {
	throw new Error("No input with id 'fahrenheit' found");
}

/**
 * Converts celsius degrees to fahrenheit degrees.
 */
const celsiusToFahrenheit = (celsius: number) =>
	(celsius * 9) / 5 + 32;

/**
 * Converts fahrenheit degrees to celsius degrees.
 */
const fahrenheitToCelsius = (fahrenheit: number) =>
	((fahrenheit - 32) * 5) / 9;

/**
 * Reads the value of an input element as a number.
 *
 * If the value cannot be parsed as a number, `0` is returned.
 */
const readInputFloat = (input: HTMLInputElement) => {
	const result = parseFloat(input.value);
	return isNaN(result) ? 0 : result;
};

/**
 * Handles a change in the fahrenheit value by updating the celcius value.
 */
const handleFahrenheitInput = () => {
	const result = fahrenheitToCelsius(
		readInputFloat(fahrenheitInput)
	);
	celsiusInput.value = result.toFixed(2);
};

/**
 * Handles a change in the celcius value by updating the fahrenheit value.
 */
const handleCelsiusInput = () => {
	const result = celsiusToFahrenheit(
		readInputFloat(celsiusInput)
	);
	fahrenheitInput.value = result.toFixed(2);
};

fahrenheitInput.addEventListener(
	"input",
	handleFahrenheitInput
);
celsiusInput.addEventListener("input", handleCelsiusInput);

// Compute the result on page load.
handleCelsiusInput();
