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

	return (
		<form
			onChange={(e) => {
				e.preventDefault();
				// TODO: Show form data
			}}
		>
			<input
				type="text"
				value={user.firstname}
				// TODO update user.firstname
				onChange={(e) => {}}
			/>
			<input
				type="text"
				// TODO update user.lastname
				value={user.lastname}
				onChange={(e) => {}}
			/>
			<input
				type="number"
				// TODO update user.age
				value={user.age}
				onChange={(e) => {}}
			/>
			<input type="submit" value="Send my data" />
		</form>
	);
};

ReactDOM.render(<App />, appDiv);
