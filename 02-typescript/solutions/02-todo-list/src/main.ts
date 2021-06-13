// Solution for all steps.

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

/**
 * The item in a todo-list.
 */
interface TodoItem {
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
 * The state of our application: everything the user might change and that we
 * need to store, the data of our app.
 */
interface State {
	todos: TodoItem[];
	filter: string;
}

/**
 * Initial state of our app.
 */
const initialState: State = {
	todos: [
		{
			name: "Learn HTML",
			done: true,
		},
		{
			name: "Learn CSS",
			done: true,
		},
		{
			name: "Learn React",
			done: false,
		},
	],
	filter: "All",
};

// Compute the initial state. If one has been saved in localStorage,
// read it. Otherwise, we start with the initial state.
const storedState = localStorage.getItem("state");
let state: State = storedState
	? JSON.parse(storedState)
	: initialState;

/**
 * Save our application's state to local storage.
 */
const saveState = () =>
	localStorage.setItem("state", JSON.stringify(state));

/**
 * Sort todo items by their names.
 */
const sortTodos = () =>
	state.todos.sort((a, b) => a.name.localeCompare(b.name));

/**
 * Returns the todos, filtered according to the current filter.
 */
const filteredTodos = () => {
	switch (state.filter) {
		case "All":
			return state.todos;
		case "Done":
			return state.todos.filter((it) => it.done);
		case "To do":
			return state.todos.filter((it) => !it.done);
		default:
			throw new Error("Unexpected filter.");
	}
};

/**
 * Renders the application.
 */
const render = () => {
	appDiv.innerHTML = "";

	const filterSelect = document.createElement("select");
	for (const filter of ["All", "Done", "To do"]) {
		const filterOption = document.createElement("option");
		filterOption.innerText = filter;
		filterOption.selected = filter === state.filter;
		filterSelect.appendChild(filterOption);
	}
	filterSelect.addEventListener("change", (event) => {
		event.preventDefault();
		state.filter = filterSelect.value;
		saveState();
		render();
	});

	appDiv.appendChild(filterSelect);

	const numbersUl = document.createElement("ul");
	for (const todo of filteredTodos()) {
		const todoLi = document.createElement("li");
		const todoLabel = document.createElement("label");

		const doneInput = document.createElement("input");
		doneInput.setAttribute("type", "checkbox");
		doneInput.checked = todo.done;
		doneInput.addEventListener("change", (event) => {
			event.preventDefault();
			todo.done = !todo.done;
			saveState();
			render();
		});
		todoLabel.appendChild(doneInput);

		todoLabel.appendChild(
			document.createTextNode(todo.name)
		);
		todoLi.appendChild(todoLabel);
		numbersUl.appendChild(todoLi);
	}
	appDiv.appendChild(numbersUl);

	const addInput = document.createElement("input");
	addInput.setAttribute("type", "text");

	const addButton = document.createElement("input");
	addButton.setAttribute("type", "submit");
	addButton.setAttribute(
		"value",
		"Add #" + (state.todos.length + 1)
	);

	const addForm = document.createElement("form");
	addForm.appendChild(addInput);
	addForm.appendChild(addButton);
	addForm.addEventListener("submit", (event) => {
		event.preventDefault();
		state.todos.push({ name: addInput.value, done: false });
		sortTodos();
		saveState();
		render();
	});
	appDiv.appendChild(addForm);
};

// Render the app on page load.
render();
