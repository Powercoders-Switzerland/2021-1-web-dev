import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

interface UserInfo {
	firstname: string;
	lastname: string;
	age: string;
}

const App = () => {
	const [user, setUser] = React.useState<UserInfo>({
		firstname: "",
		lastname: "",
		age: "",
	});
	const [submitted, setSubmitted] = React.useState(false);

	return submitted ? (
		<>
			<h1>Form submitted!</h1>
			<p>Your information:</p>
			<dl>
				<dt>First name</dt>
				<dd>{user.firstname}</dd>
				<dt>Last name</dt>
				<dd>{user.lastname}</dd>
				<dt>Age</dt>
				<dd>{user.age}</dd>
			</dl>
		</>
	) : (
		<>
			<h1>Form</h1>
			<p>
				Please enter your personal information below.{" "}
				<small>
					We will only sell them to fifteen other companies.
				</small>
			</p>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setSubmitted(true);
				}}
			>
				<p>
					<label htmlFor="firstname">First name:</label>
					<input
						type="text"
						id="firstname"
						value={user.firstname}
						onChange={(e) =>
							setUser({
								...user,
								firstname: e.target.value,
							})
						}
					/>
				</p>
				<p>
					<label htmlFor="lastname">Last name: </label>
					<input
						type="text"
						id="lastname"
						value={user.lastname}
						onChange={(e) =>
							setUser({ ...user, lastname: e.target.value })
						}
					/>
				</p>
				<p>
					<label htmlFor="age">Age: </label>
					<input
						type="number"
						id="age"
						value={user.age}
						onChange={(e) =>
							setUser({ ...user, age: e.target.value })
						}
					/>
				</p>
				<input type="submit" value="Send my data" />
			</form>
		</>
	);
};

ReactDOM.render(<App />, appDiv);
