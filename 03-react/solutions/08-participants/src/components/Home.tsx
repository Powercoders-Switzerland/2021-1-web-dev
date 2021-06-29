import * as React from "react";
import { Link } from "react-router-dom";

interface ContributorInfo {
	id: number;
	login: string;
	avatar_url: string;
}

type ErrorInfo = {
	status: number;
	statusText: string;
	message: string;
};

export function Home() {
	const [contributors, setContributors] =
		React.useState<ContributorInfo[] | null>(null);
	const [error, setError] =
		React.useState<ErrorInfo | null>(null);

	const fetchContributors = async () => {
		const response = await fetch(
			"https://api.github.com/repos/Powercoders-Switzerland/2021-1-web-dev/contributors"
		);
		const json = await response.json();
		if (response.status !== 200) {
			setError({
				status: response.status,
				statusText: response.statusText,
				message: json.message,
			});
		} else {
			setContributors(json);
		}
	};

	React.useEffect(() => {
		fetchContributors();
	}, []);

	if (error !== null) {
		return (
			<div className="container error">
				<h1>
					{error.status} {error.statusText}
				</h1>
				<p>{error.message}</p>
			</div>
		);
	}

	if (contributors === null) {
		return (
			<div className="container loading">
				<p>Loading…</p>
			</div>
		);
	}

	return (
		<main className="home container">
			<h1>Contributors</h1>
			<div className="users">
				{contributors.map((contributor) => (
					<article key={contributor.id}>
						<Link to={`/user/${contributor.login}`}>
							<h2>{contributor.login}</h2>
							<img src={contributor.avatar_url} />
						</Link>
					</article>
				))}
			</div>
		</main>
	);
}
