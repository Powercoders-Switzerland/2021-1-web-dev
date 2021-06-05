const appDiv = document.getElementById("app");

if (!appDiv || !(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

// This is the state of our application. We set the initial to an array
// containing the numbers 1, 2 and 3.
let numbers: number[] = [1, 2, 3];

/**
 * Reads the value of an input element as a number.
 *
 * If the value cannot be parsed as a number, `0` is returned.
 */
const readInputInteger = (input: HTMLInputElement) => {
	const result = parseInt(input.value);
	return isNaN(result) ? 0 : result;
};

/**
 * Computes the sum of an array of numbers.
 */
const sumArray = (numbers: number[]): number => {
	let sum = 0;
	for (const number of numbers) {
		sum += number;
	}
	return sum;
};

/**
 * Renders the application.
 */
const render = () => {
	appDiv.innerHTML = "";

	const numbersUl = document.createElement("ul");

	for (const number of numbers) {
		const numberLi = document.createElement("li");
		numberLi.textContent = number.toString();
		numbersUl.appendChild(numberLi);
	}

	const addInput = document.createElement("input");
	addInput.setAttribute("type", "number");

	const addButton = document.createElement("input");
	addButton.setAttribute("type", "submit");
	addButton.setAttribute("value", "Add Number");

	const addForm = document.createElement("form");
	addForm.appendChild(addInput);
	addForm.appendChild(addButton);
	addForm.addEventListener("submit", (event) => {
		event.preventDefault();
		numbers.push(readInputInteger(addInput));
		render();
	});

	const sumP = document.createElement("p");
	sumP.textContent = "Sum: " + sumArray(numbers);

	appDiv.appendChild(numbersUl);
	appDiv.appendChild(addForm);
	appDiv.appendChild(sumP);
};

// Render the app on page load.
render();
