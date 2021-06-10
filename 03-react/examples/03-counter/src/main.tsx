import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

const App = () => {
	const [counter, setCounter] = React.useState(0);

	return (
		<main>
			<p>{counter}</p>
			<button onClick={() => setCounter(counter + 1)}>
				Increment
			</button>
		</main>
	);
};

ReactDOM.render(<App />, appDiv);
