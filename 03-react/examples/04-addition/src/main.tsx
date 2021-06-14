import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

/**
 * Convert a string to an integer.
 * 
 * Returns 0 if the string can not be converted.
 */
const toInt = (
	value: string
): number => {
	const result = parseInt(value);
	return isNaN(result) ? 0 : result;
};

const App = (): JSX.Element => {
	const [a, setA] = React.useState("");
	const [b, setB] = React.useState("");

	return (
		<main>
			<input
				type="number"
				value={a}
				onChange={(e) => setA(e.target.value)}
			/>
			{" + "}
			<input
				type="number"
				value={b}
				onChange={(e) => setB(e.target.value)}
			/>
			{" = "}
			<span>{toInt(a) + toInt(b)}</span>
		</main>
	);
};

ReactDOM.render(<App />, appDiv);
