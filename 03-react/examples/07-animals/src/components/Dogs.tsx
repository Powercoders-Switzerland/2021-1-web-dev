import * as React from "react";
import { useParams } from "react-router-dom";

type DogCeoResponse =
	| {
			message: string[];
			status: "success";
	  }
	| {
			code: number;
			message: string;
			status: "error";
	  }
	| null;

export default function Dogs() {
	const [response, setResponse] =
		React.useState<DogCeoResponse>(null);

	const params = useParams<{ breed: string }>();

	React.useEffect(() => {
		fetch(
			`https://dog.ceo/api/breed/${params.breed}/images/random/10`
		)
			.then((response) => response.json())
			.then(setResponse);
	}, [params]);

	if (response === null) {
		return <p>Loading…</p>;
	}

	if (response.status === "error") {
		return (
			<p>
				Error {response.code}: {response.message}
			</p>
		);
	}

	return (
		<main>
			<h1>{params.breed}</h1>
			<ul>
				{response.message.map((source) => (
					<li key={source}>
						<img src={source} />
					</li>
				))}
			</ul>
		</main>
	);
}
