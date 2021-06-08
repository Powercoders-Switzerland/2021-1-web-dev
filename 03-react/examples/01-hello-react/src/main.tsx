import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

const getRandomBook = (): string => {
	return "";
};

const App = (): JSX.Element => {
	return (
		<p style={{ backgroundColor: "gray" }}>
			{getRandomBook()}
		</p>
	);
};

ReactDOM.render(<App />, appDiv);
