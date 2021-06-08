import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

/**
 * Reads the value of an input element as a number.
 *
 * If the value cannot be parsed as a number, `0` is returned.
 */
const readInputInteger = (
	input: HTMLInputElement
): number => {
	const result = parseInt(input.value);
	return isNaN(result) ? 0 : result;
};

const App = (): JSX.Element => {
	const [a, setA] = React.useState(0);
	const [b, setB] = React.useState(0);

	return (
		<main>
			<input
				type="number"
				onChange={(e) => setA(readInputInteger(e.target))}
			/>
			{" + "}
			<input
				type="number"
				onChange={(e) => setB(readInputInteger(e.target))}
			/>
			{" = "}
			<span>{a + b}</span>
		</main>
	);
};

ReactDOM.render(<App />, appDiv);
