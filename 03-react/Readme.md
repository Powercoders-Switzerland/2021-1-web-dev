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
	const authorEl = document.createElement("p");
	authorEl.setAttribute("class", "author");
	authorEl.innerText = "By " + author;
	const contentEl = document.createElement("div");
	articleEl.innerHTML = content;
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

### <em class="type">Step 4</em> Random color

- In `main.ts`, write a `getRandomColor()` function that returns a random color. Your function should have an explicit return type annotation.
- Use the `getRandomColor()` function to also randomly change the `background-color` of your book title.

## Components

## <em class="type">Example 2</em> `Book` component

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

Update the `App` component so that it display all users (no component and no filtering yet).

### <em class="type">Step 4</em> `User` component

Extract the code that shows a single user to a `User` component in `src/components/User`.

### <em class="type">Step 5</em> Separate adults and kids sections

Display the users in two separate sections depending on their age.

## `useState` hook

## Events

## <em class="type">Example 3</em> Counter

## <em class="type">Example 4</em> Addition

## <em class="type">Exercise 3</em> Random book on click

## <em class="type">Exercise 4</em> Degrees converter

## `useEffect` hook

## <em class="type">Example 5</em> `setInterval()`

## <em class="type">Exercise 5</em> Random quote

## State immutability

## <em class="type">Exercise 6</em> Numbers sum

## <em class="type">Exercise 6</em> To-do list
