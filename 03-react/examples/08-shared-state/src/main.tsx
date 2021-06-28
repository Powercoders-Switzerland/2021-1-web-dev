import * as React from "react";
import {
	HashRouter,
	Link,
	Switch,
	Route,
} from "react-router-dom";
import * as ReactDOM from "react-dom";
import { LoginForm } from "./components/LoginForm";
import { ProfilePage } from "./components/ProfilePage";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

export default function App() {
	const [user, setUser] =
		React.useState<string | null>(null);

	return (
		<HashRouter>
			<nav>
				<ul>
					<li>
						<Link to="/">My profile</Link>
					</li>
					<li>
						<Link to="/login">Log in</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route
					path="/login"
					children={<LoginForm setUser={setUser} />}
				/>
				<Route
					path="/"
					children={<ProfilePage user={user} />}
				/>
			</Switch>
		</HashRouter>
	);
}

ReactDOM.render(<App />, appDiv);
