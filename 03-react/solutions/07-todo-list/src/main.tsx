import * as React from "react";
import * as ReactDOM from "react-dom";

// Allows to use `useState` and `useEffect` directly, without prefixing them
// with `React.`.
import { useState, useEffect } from "react";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}
/**
 * The item in a todo-list.
 */
interface TodoItem {
	/**
	 * Creation date, used as the ID.
	 */
	created: number;

	/**
	 * Name of the item.
	 */
	name: string;

	/**
	 * True if the item is done.
	 */
	done: boolean;
}

/**
 * Example state of our app.
 *
 * We use it as the initial state the first the app is displayed.
 */
const EXAMPLE_TODOS: TodoItem[] = [
	{
		created: 1623910630427,
		name: "Learn HTML",
		done: true,
	},
	{
		created: 1623910648735,
		name: "Learn CSS",
		done: true,
	},
	{
		created: 1623910660622,
		name: "Learn React",
		done: false,
	},
];

/**
 * Returns a new array with item a index `index` replaced by `value`.
 */
function replace<T>(array: T[], value: T, index: number) {
	return [...array.slice(0, index), value, ...array.slice(index + 1)];
}

/**
 * Returns a new array with item `value` appended.
 */
function append<T>(array: T[], value: T) {
	return [...array, value];
}

/**
 * Returns the todos, filtered according to the given filter.
 */
const filterTodos = (todos: TodoItem[], filter: string) => {
	switch (filter) {
		case "All":
			return todos;
		case "Done":
			return todos.filter((it) => it.done);
		case "To do":
			return todos.filter((it) => !it.done);
		default:
			throw new Error("Unexpected filter.");
	}
};

// Define the `App` component.
const App = (): JSX.Element => {
	// Get todos stored in local storage. This is `null` if nothing was stored.
	const storedTodos: string | null = localStorage.getItem("todos");

	// If `storedTodos` is not null, then we parse the stored string to an array
	// of `TodoItem`s. Otherwise, it means nothing has been stored yet, so we
	// use our example todos and the initial state.
	//
	// About the ternary operator, see:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator.
	// About JSON.parse, see:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
	const initialTodos = storedTodos ? JSON.parse(storedTodos) : EXAMPLE_TODOS;

	// Define a state variable `todos` to store our array of todos.
	const [todos, setTodos] = useState(initialTodos);

	// Define a state variable `newTodoName` to store the content of the input
	// where we type the name of the new todo.
	const [newTodoName, setNewTodoName] = useState("");

	// Define a state variable `filter` allowing to filter todos. It is tied to
	// a <select> element. Its value shall be either "All", "Done" or "To do".
	const [filter, setFilter] = useState("All");

	// Our todo list, with `filter` applied.
	const filteredTodos = filterTodos(todos, filter);

	// We use the `useEffect` hook to update the `todos` value stored in local
	// storage every time the `todos` state variable changes.
	useEffect(
		// The function to call when a dependency is updated.
		() => {
			localStorage.setItem("todos", JSON.stringify(todos));
			// Note: we should return nothing here.
		},
		// The list of dependencies to watch for. In this case, the arrow
		// function passed as the first parameter will be called every time the
		// `todos` state variable changes.
		[todos]
	);

	return (
		<main>
			<select
				value={filter}
				onChange={(e) => {
					setFilter(e.target.value);
				}}
			>
				{["All", "Done", "To do"].map((x) => (
					<option>{x}</option>
				))}
			</select>
			<ul>
				{filteredTodos.map((todo) => (
					<li key={todo.created}>
						<label>
							<input
								type="checkbox"
								checked={todo.done}
								onChange={(e) => {
									setTodos(
										replace(
											todos,

											// Create a new object of type
											// `TodoItem` with all properties
											// from `todo`, but with the
											// property `done` set to
											// `e.target.checked`, which is
											// `true` if the checkbox is
											// checked, or `false` otherwise.
											{ ...todo, done: e.target.checked },

											// Returns the index of the `todo`
											// object in the `todos` array.
											// Note: we cannot use the `index`
											// argument passed to `.map()`'s
											// arrow function, because it refers
											// to the index of the `todo` in the
											// filtered array, not the array
											// with all todos.
											todos.indexOf(todo)
										)
									);
								}}
							/>
							{todo.name}
						</label>
					</li>
				))}
			</ul>
			<form
				onSubmit={(e) => {
					// We need to prevent the default handling of the submit
					// event, otherwise the page would be reloaded.
					e.preventDefault();

					// Create our new todo item.
					const newTodo: TodoItem = {
						created: Date.now(),
						name: newTodoName,
						done: false,
					};

					// Set the `todos` state variable to a new array with
					// `newTodo` appended.
					setTodos(append(todos, newTodo));
				}}
			>
				<input
					type="text"
					value={newTodoName}
					onChange={(e) => setNewTodoName(e.target.value)}
				/>
				<input type="submit" value={"Add #" + (todos.length + 1)} />
			</form>
		</main>
	);
};

ReactDOM.render(<App />, appDiv);
