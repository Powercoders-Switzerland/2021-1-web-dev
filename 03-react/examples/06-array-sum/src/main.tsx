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

interface NumberItem {
	id: number;
	value: string;
}

const App = (): JSX.Element => {
	const [numbers, setNumbers] = React.useState<
		NumberItem[]
	>([
		{ id: 1, value: "1" },
		{ id: 2, value: "2" },
		{ id: 3, value: "3" },
	]);

	const [newNumber, setNewNumber] = React.useState("");

	return (
		<main>
			<ul>
				{numbers.map((number, index) => (
					<li key={index}>
						<input
							type="number"
							value={number.value}
							onChange={(e) => {
								setNumbers([
									...numbers.slice(0, index),
									{ id: number.id, value: e.target.value },
									...numbers.slice(index + 1),
								]);
							}}
						/>
					</li>
				))}
			</ul>
			<p>
				Sum:
				{numbers
					.map((number) => toInt(number.value))
					.reduce((a, b) => a + b, 0)}
			</p>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setNumbers([
						...numbers,
						{ id: Date.now(), value: newNumber },
					]);
				}}
			>
				<input
					type="number"
					value={newNumber}
					onChange={(e) => setNewNumber(e.target.value)}
				/>
				<input type="submit" value="Add number" />
			</form>
		</main>
	);
};

ReactDOM.render(<App />, appDiv);
