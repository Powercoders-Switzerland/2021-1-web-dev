import * as React from "react";
import { useState } from "react";
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
const toInt = (value: string): number => {
	const result = parseInt(value);
	return isNaN(result) ? 0 : result;
};

const isNumber = (value: string): boolean => {
	return isNaN(parseInt(value));
};

const App = (): JSX.Element => {
	const [numbers, setNumbers] = useState<string[]>([
		"1",
		"2",
		"3",
	]);

	const [newNumber, setNewNumber] = useState("");

	return (
		<main>
			<ul>
				{numbers.map((n, index) => (
					<li>
						<input
							type="number"
							value={n}
							className={isNumber(n) ? "valid" : "invalid"}
							onChange={(e) =>
								setNumbers([
									...numbers.slice(0, index),
									e.target.value,
									...numbers.slice(index + 1),
								])
							}
						/>
					</li>
				))}
			</ul>
			<p>
				Sum: {numbers.map(toInt).reduce((a, b) => a + b)}
			</p>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setNumbers([...numbers, newNumber]);
				}}
			>
				<input
					type="number"
					value={newNumber}
					onChange={(e) => setNewNumber(e.target.value)}
				/>
				<input
					type="submit"
					value={"Add #" + (numbers.length + 1)}
				/>
			</form>
		</main>
	);
};

ReactDOM.render(<App />, appDiv);
