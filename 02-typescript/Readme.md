---
title: TypeScript
---

## Introduction

### <em class="type">Example 1</em> Motivating example

There are (at least) 3 bugs in this code. Can you spot them?

```html
<input id="a" type="number" /> +
<input id="b" type="number" /> =
<span id="result "></span>
<script>
	const aInput = document.getElementById("a");
	const bInput = document.getElementById("b");
	const resultSpan = document.getElementById("result");
	const computeResult = () =>
		(resultSpan.value = aInput.value + bInput.value);
	aInput.addEventListener("input", computeResult);
	bInput.addEventListener("input", computeResult);
	computeResult();
</script>
```

[Source](https://github.com/Powercoders-Switzerland/2021-1-web-dev/tree/main/02-typescript/examples/01-addition-bugs)

### What is a type?

> A type system is a syntaxic method for automatically checking the absence of certain erroneous behaviors by classifying program phrases according to the kinds of values they compute.
>
> — _Benjamin C. Pierce, Types and Programming Languages_

### Why do we need types?

- Early bugs discovery
- Documentation
- Autocompletion
- (Performance)

### Variable type annotations

Typescript ([example 2](https://github.com/Powercoders-Switzerland/2021-1-web-dev/tree/main/02-typescript/examples/02-variable-type)):

```ts
const foo: number = 42;
```

Python ([example 3](https://github.com/Powercoders-Switzerland/2021-1-web-dev/tree/main/02-typescript/examples/03-python-variable-type)):

```python
foo: int = 42
```

C:

```c
int foo = 42;
```

## Everyday types

### Reference

[TypeScript Handbook > Everyday types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

### Primitive types

```ts
const foo: number = 42;
const bar: string = "Hello world";
const baz: boolean = true;
const qux: undefined = undefined;
const quux: null = null;
```

### Array types

```ts
const foo: number[] = [42, 451, 1984];
const bar: string[] = ["Hello Bradbery", "Hello Orwell"];
const baz: boolean[] = [false, false, true];
```

### Parameter type annotations

```ts
function greet(name: string) {
	console.log("Hello " + name);
}
greet("Ada");
```

### Return type annotations

```ts
function greet(name: string): string {
	return "Hello " + name;
}
console.log(greet("Ada"));

function add(a: number, b: number): number {
	return a + b;
}
console.log(add(40, 2));
```

### Object types

```ts
const center: { x: number; y: number } = { x: 0, y: 0 };

// The parameter's type annotation is an object type
function printCoord(point: { x: number; y: number }) {
	console.log("The coordinate's x value is " + point.x);
	console.log("The coordinate's y value is " + point.y);
}

printCoord(center);
```

### Union types

```ts
const foo: number | string = 42;
const bar: number | string = "";
const baz: number | undefined = 42;
const qux: number | undefined = undefined;
```

### Type aliases

```ts
type Human = { firstname: string; lastname: string };
type Robot = { serialNumber: number };

function printName(member: Human | Robot) {
	// ...
}
```

### Interfaces

```ts
interface Human {
	firstname: string;
	lastname: string;
}

interface Robot {
	serialNumber: number;
}
```

### Interface extension

```ts
interface Human {
	firstname: string;
	lastname: string;
}

interface Developer extends Human {
	githubRepo: string;
}
```

## Narrowing

### Reference

[TypeScript Handbook > Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

### Equality narrowing

To differentiate _one_ value (like `null` or `undefined`) from other values, we can use an equality check.

```ts
function getLength(arg: string | undefined): number {
	if (arg === undefined) {
		return 0;
	} else {
		return arg.length;
	}
}
```

### `typeof` type guards

To differentiate a primitive type from another, we can use the `typeof` keyword that returns the type of a variable as a string. This **only** works for primitive types (string, number, boolean, undefined or null).

```ts
function sinOrLength(arg: number | string): number {
	if (typeof arg === "number") {
		return Math.sin(arg);
	} else {
		return arg.length;
	}
}
```

### Discriminated unions

Used to differentiate between interface types.

```ts
interface Human {
	type: "human";
	firstname: string;
	lastname: string;
}
interface Robot {
	type: "robot";
	serialNumber: number;
}

function printName(member: Human | Robot) {
	if (member.type === "robot") {
		console.log(member.serialNumber);
	} else {
		console.log(member.firstname + " " + member.lastname);
	}
}
```

### `instanceof` narrowing

Used to differentiate between class types.

```ts
class Human {
	firstname: string;
	lastname: string;
	// constructor ...
}
class Robot {
	serialNumber: number;
	// constructor ...
}
function printName(member: Human | Robot) {
	if (member instanceof Robot) {
		console.log(member.serialNumber);
	} else {
		console.log(member.firstname + " " + member.lastname);
	}
}
```

## How to use TypeScript

### Compilation

TypeScript files cannot be directly understood by a web browser. We need to _compile_ them to JavaScript first.

### Node.js

Node.js allows to run JavaScript outside of the browser.

We will it use for two purpose:

1. Now: to run _build tools_ which are written in JavaScript,
2. Later: to run a web server written in JavaScript.

### NPM Project

The [**N**ode **P**ackage **M**anager (NPM)](https://www.npmjs.com/) is used to manage the _dependencies_ of a project.

Each NPM project contains a `package.json` file that declares the dependencies of the project and other metadata.

### Our `package.json` file

Our `package.json` will look like:

```json
{
	"name": "01-addition",
	"version": "1.0.0",
	"author": "Ada lovelace",
	"private": true,
	"scripts": {
		"build": "webpack",
		"build:watch": "webpack --watch"
	},
	"devDependencies": {
		"ts-loader": "^9.2.3",
		"webpack": "^5.38.1",
		"webpack-cli": "^4.7.0"
	}
}
```

### Webpack

[Webpack](https://webpack.js.org/) is the build tool we will use. It can convert files from one language to another and _bundle_ them together.

Webpack is configured by a `webpack.config.js` file.

### Our `webpack.config.js` file

We will use Webpack to convert all TypeScript files from the `src` directory to a single JavaScript file `dist/bundle.js` using the following configuration:

```js
const path = require("path");

module.exports = {
	entry: "./src/main.ts",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
};
```

### TypeScript config

The TypeScript compiler itself also can be configured, using a `tsconfig.json` file. We will use the following:

```json
{
	"compilerOptions": {
		"target": "esnext",
		"module": "esnext",
		"strict": true
	}
}
```

## <em class="type">Example 4</em> [Addition](https://github.com/Powercoders-Switzerland/2021-1-web-dev/tree/main/02-typescript/examples/04-addition)

## <em class="type">Exercise 1</em> Celcius-Fahrenheit converter

### Goal

Reproduce the [degrees converter from Google search](https://www.google.com/search?q=fahrenheit+celsius):

![](images/google-degrees.png)

### <em class="type">Step 1</em> Celsius-Fahrenheit conversion

The page should contain two `<input>`: one with the value in Celsius degrees and the second in Fahrenheit degrees.

Changing the value of one input should automatically update the value of the other.

Make sure that this also work if an input is empty.

### <em class="type">Step 2 (extra)</em> Unit choosers

Under each input, there should be a `<select>` element allowing to change the degrees unit ("Fahrenheit", "Celsius" or "Kelvin"), as in the Google widget.

## Data and view separation

### Risks with manual DOM manipulation

- It makes the code hard to reason about.
- It makes it easy to introduce bugs, especially mismatch between data and user interface.
- It is not obvious to choose which elements should be static HTML or dynamically generated with JavaScript.

### Solution

Use data as a _single source of truth_, and derive the view from it.

**The view should never update itself directly.**

### Diagram

![](images/state-view.svg)

## <em class="type">Example 5</em> [Numbers sum](https://github.com/Powercoders-Switzerland/2021-1-web-dev/tree/main/02-typescript/examples/05-array-sum)

## <em class="type">Exercise 2</em> To-do list

### Setup

- Copy the content of `02-typescript/examples/05-array-sum` example, or from your first exercise, to a folder `02-typescript/02-to-do-list` in your exercises repository (so that you have all the configuration files ready).
- Then, run `npm install`.
- Remove all content of the `src/main.ts` file.
- To compile your TypeScript code, use the `npm run build` (to compile once) or `npm run build:watch` (to automatically recompile on every change).

### <em class="type">Step 1</em> `State` type

- Define a `State` type representing the state of your application. It should be an array of objects, each with an attribute `done` and an attribute `title`.
- Define an initial example state in a `state` variable of type `State`.

### <em class="type">Step 2</em> `render` function

Write a `render` function that renders the state to the DOM.

### <em class="type">Step 3</em> Add item

Add a way to add a new item to the to-do list.

### <em class="type">Step 4</em> Add checkboxes

Display a checkbox for each item showing if the item is done or not. Clicking on the checkbox should change the value of the corresponding `done` attribute.

### <em class="type">Step 5 (extra)</em> Make the items sorted

The to-do items should always be sorted alphabetically.

### <em class="type">Step 6 (extra)</em> Store state in local storage.

Each time the state changes, save it to local storage so that it can be restored on next page load.

### <em class="type">Step 7 (extra)</em> Add a filter feature

Add a way to show only items that are done or not done.

## Classes

### Classes

Remember [ES6 classes](https://erklär-mir-mal.ch/2021-1/05-01-js-repetition-with-loops.html#/20)?

```js
class Human {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
}
```

With type annotations:

```ts
class Human {
	firstname: string;
	lastname: string;
	constructor(firstname: string, lastname: string) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
}
```

### Interfaces vs Classes

Here, `ada` is a _POJO_ (Plain Old JavaScript Object), created using the _object literal notation_ (`{ ... }`):

```ts
interface Human {
	firstname: string;
	lastname: string;
}
const ada: Human = {
	firstname: "Ada",
	lastname: "Lovelace",
};
```

### Interfaces vs Classes (cont'd)

Here `ada` is an _instance_ of the `Human` class, constructed with the `new` keyword:

```ts
class Human {
	firstname: string;
	lastname: string;
	constructor(firstname: string, lastname: string) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
}
const ada: Human = new Human("Ada", "Lovelace");
```

### Interfaces vs Classes (cont'd)

The main added value of a class is the possibility to add _methods_:

```ts
class Human {
	firstname: string;
	lastname: string;
	constructor(firstname: string, lastname: string) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	toString(): string {
		return this.firstname + " " + this.lastname;
	}
}
const ada: Human = new Human("Ada", "Lovelace");
ada.toString(); // "Ada Lovelace"
```

## <em class="type">Exercise 3</em> The `MyHTMLElement` class

### Starting point

```ts
class MyHTMLElement {
	tagName: string;

	constructor(tagName: string) {
		this.tagName = tagName;
	}

	appendChild(child: MyHTMLElement) {}
}
```

Copy this code in a file `02-typescript/01-my-html-element.ts` in your repository.

### <em class="type">Step 1</em> Add a `children` attribute

Add a `children` attribute to the `MyHTMLElement` class so that the following code _type-checks_ (for now, this means that nothing should be underlined in red in VSCode):

```ts
const element: MyHTMLElement = new MyHTMLElement("div", []);
element.children[0].tagName;
```

_Question:_ in the real `HTMLElement` type, is the `children` attribute an array?

### <em class="type">Step 2</em> Add an `insertBefore` method

Write an `insertBefore` method declaration (without implementation) so that the following code type-checks:

```ts
const child: MyHTMLElement = new MyHTMLElement("span", []);
const element: MyHTMLElement = new MyHTMLElement("div", []);
element.insertBefore(child, new MyHTMLElement("span", []));
```

### <em class="type">Step 3</em> Add a `querySelector` method

Write a `querySelector` method declaration that takes a `string` as an argument and returns either a `MyHTMLElement` or `null`. Use `return null;` as implementation for now.

### <em class="type">Step 4 (extra)</em> Add a `classList` attribute

Add a `classList` attribute so that the following code type-checks:

```ts
element.classList.add("a-class");
element.classList.has("a-class");
element.classList.remove("a-class");
```

### <em class="type">Step 5 (extra)</em> Implementation

Write the methods' implementations.
