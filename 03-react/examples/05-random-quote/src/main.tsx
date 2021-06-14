import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

// From https://www.designwizard.com/blog/design-trends/colour-combination.
const themes: string[][] = [
	["#5F4B8B", "#E69A8D"],
	["#00203F", "#ADEFD1"],
	["#606060", "#D6ED17"],
	["#2C5F2D", "#97BC62"],
	["#00539C", "#EEA47F"],
	["#101820", "#FEE715"],
	["#101820", "#F2AA4C"],
	["#2BAE66", "#FCF6F5"],
	["#990011", "#FCF6F5"],
];

const QUOTABLE_URL = "https://api.quotable.io/random";

interface Quote {
	content: string;
	author: string;
}

const App = (): JSX.Element => {
	const [quote, setQuote] = useState<Quote | null>(null);
	const [theme, setTheme] = useState<string[]>(themes[0]);

	const fetchQuote = async () => {
		const response = await fetch(QUOTABLE_URL);
		const json = await response.json();
		setQuote(json);
		const index = Math.floor(Math.random() * themes.length);
		setTheme(themes[index]);
	};

	return (
		<main
			style={{
				backgroundColor: theme[0],
				color: theme[1],
			}}
		>
			<div className="quote-card">
				{quote === null ? (
					""
				) : (
					<blockquote>
						<p>{quote.content}</p>
						<p>
							<em>— {quote.author}</em>
						</p>
					</blockquote>
				)}
				<button
					onClick={fetchQuote}
					style={{
						backgroundColor: theme[1],
						color: theme[0],
					}}
				>
					Show random quote
				</button>
			</div>
		</main>
	);
};

ReactDOM.render(<App />, appDiv);
