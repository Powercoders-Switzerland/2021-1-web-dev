import * as React from "react";
import { useParams, Link } from "react-router-dom";

/**
 * The type of the JSON data we get from `GET https://api.github.com/users/:user`.
 *
 * Note: we only declare the subset of fields that we will use in our app.
 */
type UserInfo = {
	html_url: string;
	name: string;
	bio: string;
	location: string;
	avatar_url: string;
};

/**
 * Information about an error.
 */
type ErrorInfo = {
	statusCode: number;
	statusText: string;
	message: string;
};

/**
 * Displays information about a GitHub user.
 *
 * The user name is retrieved from the URL parameters `username`.
 */
export function User() {
	// This state variable will hold the user data loaded from the GitHub API.
	// Before we get a response, we initially set to `null`.
	const [user, setUser] =
		React.useState<UserInfo | null>(null);

	// This state variable will hold information about the error if something
	// goes wrong, or `null` otherwise.
	const [error, setError] =
		React.useState<ErrorInfo | null>(null);

	/**
	 * The `useParams` hook enables us to get a URL parameter from a `Route`. It
	 * returns an object where each property is a URL parameter. Here, we expect
	 * an object with a single property `username` because we matched the
	 * route`/user/:username` (see `main.tsx`).
	 *
	 * See https://reactrouter.com/web/api/Route/route-props.
	 */
	const params = useParams<{ username: string }>();

	/**
	 * Fetches user data from the GitHub API and set the `user` state variable
	 * in case of success, or `error` otherwise.
	 *
	 * Note: this is an async function. It is equivalent to
	 * `fetch(...).then(response => response.json()).then(json => ...)`.
	 *
	 * See
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function.
	 */
	const fetchUser = async () => {
		const response = await fetch(
			`https://api.github.com/users/${params.username}`
		);
		const json = await response.json();
		if (response.status !== 200) {
			setError({
				statusCode: response.status,
				statusText: response.statusText,
				message: json.message,
			});
		} else {
			setUser(json);
		}
	};

	// The `useEffect` hook enable us to run a function (first parameter) only
	// when needed. In this case, it will run only once when the component is
	// rendered for the first time, because the array of dependencies (second
	// parameter) is empty.
	React.useEffect(() => {
		fetchUser();
	}, []);

	// If there is an error, we show it.
	if (error !== null) {
		return (
			<div className="container error">
				<h1>
					{error.statusCode} {error.statusText}
				</h1>
				<p>{error.message}</p>
			</div>
		);
	}

	// Otherwise, if the data is not loaded yet, we show `Loading…`.
	if (user === null) {
		return (
			<div className="container loading">
				<p>Loading…</p>
			</div>
		);
	}

	// Otherwise, then there is no error and the data is loaded, so we can show
	// our user data!
	return (
		<div className="container contributor">
			<nav>
				<Link to="/">Back to home page</Link>
			</nav>
			<main>
				<article className="user">
					<h1>{user.name}</h1>
					<img src={user.avatar_url} />
					<dl>
						<dt>GitHub profile</dt>
						<dd>
							<a href={user.html_url}>
								{user.html_url.replace("https://", "")}
							</a>
						</dd>
						{user.location && (
							<>
								<dt>Location</dt>
								<dd>{user.location}</dd>
							</>
						)}
					</dl>
					<p>{user.bio}</p>
				</article>
			</main>
		</div>
	);
}
