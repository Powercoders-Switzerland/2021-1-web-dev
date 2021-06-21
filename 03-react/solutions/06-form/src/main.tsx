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
			onSubmit={(e) => {
				e.preventDefault();
				alert(
					`${user.firstname} ${user.lastname}, ${user.age} years old.`
				);
			}}
		>
			<input
				type="text"
				value={user.firstname}
				onChange={(e) =>
					setUser({ ...user, firstname: e.target.value })
				}
			/>
			<input
				type="text"
				value={user.lastname}
				onChange={(e) =>
					setUser({ ...user, lastname: e.target.value })
				}
			/>
			<input
				type="number"
				value={user.age}
				onChange={(e) =>
					setUser({ ...user, age: e.target.value })
				}
			/>
			<input type="submit" value="Send my data" />
		</form>
	);
};

ReactDOM.render(<App />, appDiv);
