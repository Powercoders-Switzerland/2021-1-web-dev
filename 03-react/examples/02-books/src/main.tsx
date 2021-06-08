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

ReactDOM.render(<App />, appDiv);
