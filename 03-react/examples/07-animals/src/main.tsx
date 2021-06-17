import * as React from "react";
import {
	HashRouter,
	Link,
	Switch,
	Route,
} from "react-router-dom";
import * as ReactDOM from "react-dom";
import Dogs from "./components/Dogs";
import Cat from "./components/Cat";
import Home from "./components/Home";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

export default function App() {
	return (
		<HashRouter>
			<nav>
				<ul>
					<li>
						<Link to="/">❤️ Home</Link>
					</li>
					<li>
						<Link to="/cat">🐱 Cat</Link>
					</li>
					<li>
						<Link to="/dogs/husky">🐶 Huskies</Link>
					</li>
					<li>
						<Link to="/dogs/pug">🐶 Pugs</Link>
					</li>
				</ul>
			</nav>

			<Switch>
				<Route path="/cat" children={<Cat />} />
				<Route path="/dogs/:breed" children={<Dogs />} />
				<Route path="/" children={<Home />} />
			</Switch>
		</HashRouter>
	);
}

ReactDOM.render(<App />, appDiv);
