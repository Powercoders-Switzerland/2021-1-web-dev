import * as React from "react";

interface LoginFormProps {
	setUser: (user: string) => void;
}

export function LoginForm(props: LoginFormProps) {
	const [username, setUsername] =
		React.useState<string>("");

	return (
		<section>
			<h2>Login form</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					props.setUser(username);
				}}
			>
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input type="submit" value="Login" />
			</form>
		</section>
	);
}
