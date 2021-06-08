import * as React from "react";
import * as ReactDOM from "react-dom";
import Book from "./components/Book";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

const books: string[] = [
	"Anna Karenina",
	"To Kill a Mockingbird",
	"The Great Gatsby",
	"One Hundred Years of Solitude",
	"A Passage to India",
	"Invisible Man",
	"Don Quixote",
	"Beloved",
	"Mrs. Dalloway",
	"Things Fall Apart",
	"Jane Eyre",
	"The Color Purple",
];

const App = () => (
	<main>
		{books.map((title) => (
			<Book title={title} color="lightgrey" />
		))}
	</main>
);

const renderArticle2 = (
	title: string,
	author: string,
	content: string
) => {
	return (
		<article>
			<h2>{title}</h2>
			<p className="author">By {author}</p>
			<div>{content}</div>
		</article>
	);
};

const renderArticle = (
	title: string,
	author: string,
	content: string
) => {
	const articleEl = document.createElement("article");
	const titleEl = document.createElement("h2");
	titleEl.innerText = title;
	const authorEl = document.createElement("p");
	authorEl.setAttribute("class", "author");
	authorEl.innerText = "By " + author;
	const contentEl = document.createElement("div");
	articleEl.innerHTML = content;
	return articleEl;
};

ReactDOM.render(<App />, appDiv);
