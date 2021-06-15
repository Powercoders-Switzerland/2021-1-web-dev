---
title: React
---

## JSX

### DOM APIs

```ts
const renderArticle = (
	title: string,
	author: string,
	content: string
) => {
	const articleEl = document.createElement("article");
	const titleEl = document.createElement("h2");
	titleEl.innerText = title;
	articleEl.appendChild(titleEl);
	const authorEl = document.createElement("p");
	authorEl.setAttribute("class", "author");
	authorEl.innerText = "By " + author;
	articleEl.appendChild(authorEl);
	const contentEl = document.createElement("div");
	contentEl.innerHTML = content;
	articleEl.appendChild(contentEl);
	return articleEl;
};
```

What does this function do? Do you like it?

### What if

What if we could generate our HTML elements directly from JavaScript, but with an HTML-like syntax?

### Entering JSX

```tsx
const renderArticle = (
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
```

## <em class="type">Example 1</em> [Hello react](https://github.com/Powercoders-Switzerland/2021-1-web-dev/tree/main/03-react/examples/01-hello-react)

## <em class="type">Exercise 1</em> Random book

### Goal

Display a random book title form the following list:

```typescript
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
```

### <em class="type">Step 1</em> Add the React boilerplate

- Copy the content of `03-react/examples/01-hello-react` example to a folder `03-react/01-random-book` in your exercises repository.
- Then, run `npm install`.
- To compile your TypeScript code, use the `npm run build` (to compile once) or `npm run build:watch` (to automatically recompile on every change).

### <em class="type">Step 2</em> Random book

- In `main.ts`, write a `getRandomBook()` function that returns a random book from the array. Your function should have an explicit return type annotation.
- Update the React `App` component to display a random book on every page load.

### <em class="type">Step 3</em> Random color

- In `main.ts`, write a `getRandomColor()` function that returns a random color. Your function should have an explicit return type annotation.
- Use the `getRandomColor()` function to also randomly change the `background-color` of your book title.

## Conditional rendering

### Reference

[Conditional rendering, React docs](https://reactjs.org/docs/conditional-rendering.html)

### If-else

```tsx
function App() {
	const userConnected: boolean = false;

	if (userConnected) {
		return <button>Show my profile</button>;
	}
	return <button>Log in</button>;
}
```

### Conditional operator

```tsx
function App() {
	const userConnected: boolean = false;
	return (
		<div className={userConnected ? "guest" : "user"}></div>
	);
}
```

## Lists

### Reference

[Lists and key, React docs](https://reactjs.org/docs/lists-and-keys.html)

### Using `.map()`

```tsx
const books: string[] = [
	"Anna Karenina",
	"To Kill a Mockingbird",
];

const App = () => (
	<ul>
		{books.map(title => <li>{title}</li>))}
	</ul>
);
```

### Keys

When rendering a list, each element of the list should have **unique** `key` prop.

```tsx
const books: string[] = [
	"Anna Karenina",
	"To Kill a Mockingbird",
];

const App = () => (
	<ul>
		{books.map(title => <li key={title}>{title}</li>))}
	</ul>
);
```

## Components

### Reference

[Components and Props, React docs](https://reactjs.org/docs/components-and-props.html)

### Defining a component

```tsx
function Comment() {
	return (
		<article>
			<h2>My comment</h2>
			<p className="author">By Matt</p>
			<p>I think that…</p>
		</article>
	);
}

function App() {
	return <Comment />;
}
```

### Props

```tsx
interface CommentProps {
	title: string;
	author: string;
	content: string;
}

function Comment(props: CommentProps) {
	return (
		<article>
			<h2>{props.title}</h2>
			<p className="author">By {props.author}</p>
			<p>{props.content}</p>
		</article>
	);
}

function App() {
	return (
		<Comment
			title="Evidence"
			author="René"
			content="Cogito, ergo sum"
		/>
	);
}
```

### Object as prop

```tsx
interface CommentInfo {
	title: string;
	author: string;
	content: string;
}

interface CommentProps {
	comment: CommentInfo;
}

function Comment(props: CommentProps) {
	return (
		<article>
			<h2>{props.comment.title}</h2>
			<p className="author">By {props.comment.author}</p>
			<p>{props.comment.content}</p>
		</article>
	);
}

function App() {
	const discourse: CommentInfo = {
		title: "Evidence",
		author: "René",
		content: "Cogito, ergo sum",
	};

	return <Comment comment={discourse} />;
}
```

## <em class="type">Example 2</em> [Books list](https://github.com/Powercoders-Switzerland/2021-1-web-dev/tree/main/03-react/examples/02-books)

## <em class="type">Exercise 2</em> Users list

### Goal

Display the following list of users in two sections `Adults` and `Kids`:

```typescript
const users = [
	{
		id: 1,
		avatar:
			"https://cdn.fakercloud.com/avatars/nicollerich_128.jpg",
		first_name: "Claire",
		last_name: "Price",
		age: 12,
		city: "North Kirstin",
		ip: "161.208.247.105",
		isAdmin: false,
	},
	{
		id: 2,
		avatar:
			"https://cdn.fakercloud.com/avatars/edobene_128.jpg",
		first_name: "Carrie",
		last_name: "Mayer",
		age: 62,
		city: "Everettetown",
		ip: "123.224.60.146",
		isAdmin: true,
	},
	{
		id: 3,
		avatar:
			"https://cdn.fakercloud.com/avatars/rodnylobos_128.jpg",
		first_name: "Jessy",
		last_name: "Kassulke",
		age: 8,
		city: "Lake Fordhaven",
		ip: "164.89.151.58",
		isAdmin: false,
	},
	{
		id: 4,
		avatar:
			"https://cdn.fakercloud.com/avatars/charliegann_128.jpg",
		first_name: "Amalia",
		last_name: "Rogahn",
		age: 108,
		city: "South Russberg",
		ip: "162.25.24.120",
		isAdmin: false,
	},
	{
		id: 5,
		avatar:
			"https://cdn.fakercloud.com/avatars/jmfsocial_128.jpg",
		first_name: "Kristoffer",
		last_name: "Wuckert",
		age: 66,
		city: "Lake Angelina",
		ip: "85.179.25.149",
		isAdmin: false,
	},
	{
		id: 6,
		avatar:
			"https://cdn.fakercloud.com/avatars/craigrcoles_128.jpg",
		first_name: "Kiera",
		last_name: "Rohan",
		age: 36,
		city: "East Beverly",
		ip: "27.34.243.77",
		isAdmin: false,
	},
	{
		id: 7,
		avatar:
			"https://cdn.fakercloud.com/avatars/bruno_mart_128.jpg",
		first_name: "Emmie",
		last_name: "Hand",
		age: 74,
		city: "New Maryjaneberg",
		ip: "85.232.129.225",
		isAdmin: true,
	},
	{
		id: 8,
		avatar:
			"https://cdn.fakercloud.com/avatars/woodsman001_128.jpg",
		first_name: "Cameron",
		last_name: "Veum",
		age: 16,
		city: "Altadena",
		ip: "168.252.158.225",
		isAdmin: false,
	},
	{
		id: 9,
		avatar:
			"https://cdn.fakercloud.com/avatars/markwienands_128.jpg",
		first_name: "Tremaine",
		last_name: "Sanford",
		age: 10,
		city: "Lenexa",
		ip: "38.83.7.48",
		isAdmin: false,
	},
	{
		id: 10,
		avatar:
			"https://cdn.fakercloud.com/avatars/ah_lice_128.jpg",
		first_name: "Ronaldo",
		last_name: "Weissnat",
		age: 83,
		city: "Baumbachtown",
		ip: "50.218.254.52",
		isAdmin: false,
	},
	{
		id: 11,
		avatar:
			"https://cdn.fakercloud.com/avatars/zaki3d_128.jpg",
		first_name: "Ephraim",
		last_name: "Goyette",
		age: 63,
		city: "North Martina",
		ip: "147.105.193.65",
		isAdmin: false,
	},
	{
		id: 12,
		avatar:
			"https://cdn.fakercloud.com/avatars/boxmodel_128.jpg",
		first_name: "Clay",
		last_name: "Kunde",
		age: 113,
		city: "South Damon",
		ip: "209.104.243.157",
		isAdmin: false,
	},
	{
		id: 13,
		avatar:
			"https://cdn.fakercloud.com/avatars/VinThomas_128.jpg",
		first_name: "Melisa",
		last_name: "Leannon",
		age: 18,
		city: "Hilo",
		ip: "103.82.167.168",
		isAdmin: false,
	},
	{
		id: 14,
		avatar:
			"https://cdn.fakercloud.com/avatars/miguelmendes_128.jpg",
		first_name: "Clovis",
		last_name: "Medhurst",
		age: 15,
		city: "Harveybury",
		ip: "168.223.235.220",
		isAdmin: false,
	},
	{
		id: 15,
		avatar:
			"https://cdn.fakercloud.com/avatars/mandalareopens_128.jpg",
		first_name: "Mylene",
		last_name: "Renner",
		age: 49,
		city: "Arlington",
		ip: "223.89.148.36",
		isAdmin: false,
	},
	{
		id: 16,
		avatar:
			"https://cdn.fakercloud.com/avatars/ma_tiax_128.jpg",
		first_name: "Marcos",
		last_name: "Ferry",
		age: 47,
		city: "Strackehaven",
		ip: "74.94.165.210",
		isAdmin: false,
	},
	{
		id: 17,
		avatar:
			"https://cdn.fakercloud.com/avatars/balakayuriy_128.jpg",
		first_name: "Brain",
		last_name: "Mohr",
		age: 54,
		city: "Carrollton",
		ip: "11.121.113.44",
		isAdmin: false,
	},
	{
		id: 18,
		avatar:
			"https://cdn.fakercloud.com/avatars/aleclarsoniv_128.jpg",
		first_name: "Bella",
		last_name: "VonRueden",
		age: 18,
		city: "Columbia",
		ip: "224.144.68.251",
		isAdmin: true,
	},
	{
		id: 19,
		avatar:
			"https://cdn.fakercloud.com/avatars/andrewarrow_128.jpg",
		first_name: "Franz",
		last_name: "Raynor",
		age: 28,
		city: "Garrickchester",
		ip: "91.159.111.88",
		isAdmin: false,
	},
	{
		id: 20,
		avatar:
			"https://cdn.fakercloud.com/avatars/carlosgavina_128.jpg",
		first_name: "Celestino",
		last_name: "Bailey",
		age: 61,
		city: "Aronport",
		ip: "242.25.16.144",
		isAdmin: false,
	},
];
```

### <em class="type">Step 1</em> Add the React boilerplate

- Copy the content of `03-react/examples/01-hello-react` example to a folder `03-react/02-users-list` in your exercises repository.
- Then, run `npm install`.
- To compile your TypeScript code, use the `npm run build` (to compile once) or `npm run build:watch` (to automatically recompile on every change).

### <em class="type">Step 2</em> `UserInfo` interface

Write a `UserInfo` interface, and add an explicit type annotation to the `users` constant.

### <em class="type">Step 3</em> All users list

Update the `App` component so that it displays all users (no component and no filtering yet).

### <em class="type">Step 4</em> `User` component

Extract the code that shows a single user to a `User` component in `src/components/User`. The component should have a single prop of type `UserInfo`.

### <em class="type">Step 5</em> Separate adults and kids sections

Display the users in two separate sections depending on their age.

### <em class="type">Step 6</em> Admin badge

Next to the name of each user, display a badge if it is an admin.

## <em class="type">Recap</em> ES6 destructuring

### Reference

- [Destructuring assignment, MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Slide from a few weeks ago](https://erklär-mir-mal.ch/2021-1/05-01-js-repetition-with-loops.html#/21)

### Array destructuring

```js
// This is a shorthand:
const [hello, world] = ["Hello", "World"];

// for this:
const myArray = ["Hello", "World"];
const hello = myArray[0];
const world = myArray[1];
```

### Object destructuring

```js
// This is a shorthand:
const { firstname, lastname } = {
	firstname: "Ada",
	lastname: "Lovelace",
};

// for this:
const myObject = { firstname: "Ada", lastname: "Lovelace" };
const firstname = myObject.firstname;
const lastname = myObject.lastname;
```

## Events

### Reference

[Handling Events](https://reactjs.org/docs/handling-events.html)

### `onClick` prop

To listen on clicks:

```tsx
<button onClick={() => console.log("Button clicked!")}>
	Click me!
</button>
```

### `onChange` prop

To listen on input changes:

```tsx
return (
	<input
		type="text"
		onChange={(e) =>
			console.log("New value: " + e.target.value)
		}
	/>
);
```

### Type of `onChange` event

As in the DOM API, the handler takes an event object as parameter, with a `target` property referring the to event target (HTML element on which the event was triggered).

When you write the handler inline as in the previous slide, you do not need a parameter type annotation. However, if you want to declare your function elsewhere, you will need to tell TypeScript that the event is of type ` React.ChangeEvent<HTMLInputElement>`:

```tsx
const handleChange = (
	e: React.ChangeEvent<HTMLInputElement>
) => console.log("New value: " + e.target.value);
return <input type="text" onChange={handleChange} />;
```

<small>For now, let's assume `React.ChangeEvent<HTMLInputElement>` represents "an object with a `target` property of type `HTMLInputElement`". We will learn about [generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) later.</small>

## `useState` hook

### Reference

[Using the State Hook](https://reactjs.org/docs/hooks-state.html)

### Usage

```tsx
const App = () => {
	// `0` is the initial value, before `setCounter` is ever called.
	const [counter, setCounter] = React.useState(0);

	// We can read the state value using `counter`, or
	// change it by calling `setCounter(newValue)`.

	return (
		<main>
			<p>{counter}</p>
			<button onClick={() => setCounter(counter + 1)}>
				Increment
			</button>
		</main>
	);
};
```

React will take care of automatically re-rendering the component when the state changes.

In this case, the view will be updated when calling `setCounter()`.

## <em class="type">Example 3</em> [Counter](https://github.com/Powercoders-Switzerland/2021-1-web-dev/tree/main/03-react/examples/03-counter)

## <em class="type">Example 4</em> [Addition](https://github.com/Powercoders-Switzerland/2021-1-web-dev/tree/main/03-react/examples/04-addition)

## <em class="type">Exercise 3</em> Random book on click

### Goal

On every click, display a different book, with a different background color.

### <em class="type">Step 1</em> Add the React boilerplate

- Copy the content of `03-react/examples/01-hello-react` example to a folder `03-react/03-random-book-on-click` in your exercises repository.
- Then, run `npm install`.
- To compile your TypeScript code, use the `npm run build` (to compile once) or `npm run build:watch` (to automatically recompile on every change).

## <em class="type">Exercise 4</em> Degrees converter

### Goal

Reproduce your degrees converter in React.

### <em class="type">Step 1</em> Add the React boilerplate

- Copy the content of `03-react/examples/01-hello-react` example to a folder `03-react/04-converter` in your exercises repository.
- Then, run `npm install`.
- To compile your TypeScript code, use the `npm run build` (to compile once) or `npm run build:watch` (to automatically recompile on every change).

## Recap: `fetch` API and promises

### Reference

- [Using Fetch, MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Slides from a few weeks ago](https://erklär-mir-mal.ch/2021-1/06-02-ajax+json.html#/22)

### Usage with `then()` and `catch()`

```js
fetch("https://api.quotable.io/random")
	.then((response) => {
		console.log("HTTP Response status: " + response.status);
		return response.json();
	})
	.then((data) => console.log(data));
```

### Usage with `async` and `await`

```js
const getMyQuote = async () => {
	const response = await fetch(
		"https://api.quotable.io/random"
	);
	console.log("HTTP Response status: " + response.status);
	const data = await response.json();
	console.log(data);
};
```

### Adding query parameters to a URL

```js
const url = new URL("https://api.example.com");
url.searchParams.append("q", "Hello World");
url.searchParams.append("sort", "year");
console.log(url.toString());
```

### Type of `response.json()`

`response.json()` returns an object of type `any`:

```js
const data: any = await response.json();
```

This means that you can assign it to any type, and TypeScript will _not_ check it. This is because TypeScript could not possibly know what will be returned by your request. Therefore, your need to be extra careful to assign it to the correct type.

### Typed `useState()`

You can explicitly set the type of a React state value:

```ts
const [value, setValue] = React.useState<boolean>(true);
```

## <em class="type">Example 5</em> [Random quote](https://github.com/Powercoders-Switzerland/2021-1-web-dev/tree/main/03-react/examples/05-random-quote)

## <em class="type">Exercise 5</em> Images search

### Goal

On your page, there should be a text input and a `Search images` button. When clicking on the button, you should show 10 related images found with the [Pixabay API](https://pixabay.com/api/docs/).

### <em class="type">Step 1</em> Add the React boilerplate

- Copy the content of `03-react/examples/05-random-quote` example to a folder `03-react/05-images-search` in your exercises repository.
- Then, run `npm install`.
- To compile your TypeScript code, use the `npm run build` (to compile once) or `npm run build:watch` (to automatically recompile on every change).

### <em class="type">Step 2</em> Find the search API method

Find which API method you will need to call to get your results. Try an example in your browser and study the JSON response.

### <em class="type">Step 3</em> Write a `PixbaySearch` type

Write a `PixbaySearch` interface corresponding to the data you expect back from your request to the API.

**Note:** you only need to declare the object properties that you will use.

### <em class="type">Step 4</em> Define a state of type `PixbaySearch | null`

To create a state variable of type `PixbaySearch | null`, which an initial value of `null`, use:

```tsx
const [data, setData] =
	React.useState<PixbaySearch | null>(null);
```

### <em class="type">Step 5</em> Add the click event listener

Add a minimal view that just shows your `data` state variable as JSON (`JSON.strinfify(data)`) in a `<pre>` element, and a button that will call the API and update the state using `setData(...)`.

### <em class="type">Step 6</em> Write the view

Write the actual code displaying your `data`:

- Before the button is clicked, "Type something and click 'Search images'" should be displayed.
- If the button has been pressed but not images have been found, you should display "No images found".
- If the button has been pressed and images have been found, show the images.

## <em class="type">Recap</em> Arrow functions

### Reference

[Array functions expressions > Syntax, MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#syntax)

### Shortest form

```ts
const pow2 = (n: number): number => n * n;
```

Here, parentheses are optional.

### Multiple or no parameters

```ts
const pow2 = (): string => "Hello world";
const add = (a: number, b: number): number => a + b;
```

Here, parentheses are mandatory.

### Multiline statements

```ts
const greet = (name: string): string => {
	const result = `Hello ${name}!`;
	return result;
};
```

To write several statements in the body of the function, we must add brackets around the body and a return statement.

### Function types

```ts
const greet = (
	name: string,
	transform: (name: string) => string
): string => {
	const transformedName = transform(name);
	const result = `Hello ${transformedName}!`;
	return result;
};
```

The syntax for function types is similar to array functions

### <em class="type">Mini-exercise</em> Types of array methods

Think how to specify the type of `f` in these functions:

- `map(array: number[], f: ???)`: apply `f` to each item.
- `filter(array: number[], f: ???)`: only keep elements where `f(element)` returns `true`.
- `reduce(array: number[], f: ???)`: `f` takes two parameters, the current _accumulated value_, and an item. It is uses to _reduce_ the array to a single value.

### Example implementation of `map()`

Example implementation of `map()` for an array of numbers:

```ts
const map = (
	numbers: number[],
	f: (n: number) => number
) => {
	const result: number[] = [];
	for (const n of numbers) {
		result.push(f(n));
	}
	return result;
};

map([1, 2, 3], (x) => x * x);
// Returns [1, 4, 9]

map([1, 2, 3], (x) => x * 2);
// Returns [2, 4, 6]
```

### Example implementation of `filter()`

Example implementation of `filter()` for an array of numbers:

```ts
const filter = (
	numbers: number[],
	f: (n: number) => boolean
) => {
	const result: number[] = [];
	for (const n of numbers) {
		if (f(n)) {
			result.push(n);
		}
	}
	return result;
};

filter([1, -5, 6, -9, 2, 3], (x) => x >= 0);
// Returns [1, 6, 2, 3]

filter([0, 5, 8, 2, 9, 3], (x) => x % 2 === 0);
// Returns [0, 8, 2]
```

### Example implementation of `reduce()`

Example implementation of `reduce()` for an array of numbers:

```ts
const reduce = (
	numbers: number[],
	f: (a: number, b: number) => number,
	initialValue: number
) => {
	let acc = initialValue;
	for (const n of numbers) {
		acc = f(acc, n);
	}
	return acc;
};

reduce([1, 2, 3], (a, b) => a + b, 0);
// Returns 6

reduce([2, 1, 3], (a, b) => Math.min(a, b));
// Returns 1
```

### <em class="type">Mini-exercise</em> `reduce` usage

Use `Array.prototype.reduce()` to:

- compute the sum of the elements in an array,
- compute the minimum element in an array,
- find the first non-null element in an array.

## Object and array state updates

### State in React is considered _immutable_

```tsx
const [numbers, setNumbers] = [1, 2, 3];

numbers[2] = 42;
setNumbers(numbers); // THIS DOES NOT WORK!
```

### Referential equality examples

```js
[] === [];
[1, 2, 3] === [1, 2, 3];
{"firstname": "Ada"} === {"firstname": "Ada"};
{} === {};

const a = [1, 2, 3];
const b = a;
a === b;

b.push(42)
a === b
```

### Referential equality video

<iframe width="560" height="315" src="https://www.youtube.com/embed/p8MpTvVYLVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Array slice method

See [`Array.prototype.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

### Array spread syntax

```js
const a = [1, 2, 3];
const b = [...a, 6];
```

### <em class="type">Mini-exercise</em> Array update patterns

How can we use the array spread syntax to:

- Prepend an element?
- Concatenate arrays?
- Remove an element?
- Modify an element?

### Object spread syntax

```js
const ada = { firstname: "Ada", lastname: "Lovelace" };
const ada2 = { ...ada, age: 42 };
```

## <em class="type">Exercise 6</em> Form

### Goal

Write a `<Form />` component with a single state variable of the following type:

```ts
interface UserForm {
	firstname: string;
	lastname: string;
	age: number;
}
```

Your component should show one `<input>` for each property of the `UserForm` interface, a submit button. On form submission (using `onSubmit` event), your show the content of the fields to the page.

Please work on a `03-react/06-form` directory in your exercises repository.

## <em class="type">Exercise 7</em> List of strings

### Goal

Write a `<StringsList />` component with a single state variable of type `string[]`. The component should show a list of strings, a form to add one, and allow editing existing ones.

Please work on a `03-react/07-strings-list` directory in your exercises repository.

## <em class="type">Example 6</em> [Numbers sum](https://github.com/Powercoders-Switzerland/2021-1-web-dev/tree/main/03-react/examples/06-array-sum)

## <em class="type">Exercise 8</em> To-do list

## `useEffect` hook

### Reference

[Using the Effect Hook, React docs](https://reactjs.org/docs/hooks-effect.html)

### Definition

[WIP]
