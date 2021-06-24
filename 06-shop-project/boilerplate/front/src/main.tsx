import * as React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

// TODO: Write your React app ;)
const App = () => <p>Hello World</p>;

ReactDOM.render(<App />, appDiv);
