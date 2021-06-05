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

[Source](./01-addition-bugs.html)

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

Typescript ([example 2](./02-variable-type.ts)):

```ts
const foo: number = 42;
```

Python ([example 3](./03-python-variable-type.py)):

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

```js
const foo: number | string = 42;
const bar: number | string = "";
const baz: number | undefined = 42;
const qux: number | undefined = undefined;
```

### Type aliases

```js
type Human = { firstname: string, lastname: string };
type Robot = { serialNumber: number };

function printName(member: Human | Robot) {
	// ...
}
```

### Interfaces

```js
interface Human {
	firstname: string;
	lastname: string;
}

interface Robot {
	serialNumber: number;
}
```

### Interface extension

```js
interface Human {
	firstname: string;
	lastname: string;
}

interface Developer extends Human {
	githubRepo: string;
}
```

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

In TypeScript, we explicitly annotate _attributes_:

```js
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

```js
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

Here `ada2` is an instance of the `Human` class, constructed with the `new` keyword:

```js
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

```js
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

## <em class="type">Exercise 1</em> The `MyHTMLElement` class

### Starting point

```js
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

Add a `children` attribute to the `MyHTMLElement` class so that the following code _type-checks_ (for now, this means nothing should be underlined in red in VSCode):

```js
const element: MyHTMLElement = new MyHTMLElement("div", []);
element.children[0].tagName;
```

_Question:_ in the real `HTMLElement` type, is the `children` attribute an array?

### <em class="type">Step 2</em> Add an `insertBefore` method

Write an `insertBefore` method declaration (without implementation) so that the following code type-checks:

```js
const child: MyHTMLElement = new MyHTMLElement("span", []);
const element: MyHTMLElement = new MyHTMLElement("div", []);
element.insertBefore(child, new MyHTMLElement("span", []));
```

### <em class="type">Step 3</em> Add a `querySelector` method

Write a `querySelector` method declaration (just write `return null` as a mock implementation) so that the following code type-checks:

```js
const element: MyHTMLElement = new MyHTMLElement("div", []);
const child = element.querySelector("span");
if (child !== null) {
	child.tagName;
}
```

### <em class="type">Step 4 (advanced)</em> Add a `classList` attribute

Add a `classList` attribute so that the following code type-checks:

```js
element.classList.add("a-class");
element.classList.has("a-class");
element.classList.remove("a-class");
```

### <em class="type">Step 5 (advanced)</em> Implementation

Fill the code for all methods so that everything works as expected.

## Narrowing

### Reference

[TypeScript Handbook > Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

### Equality narrowing

When we want to differentiate _one_ value (like `null` or `undefined`) from other values, we can use an equality check.

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

When we want to differentiate a primitive type from another, we can use the `typeof` keyword that returns the type of a variable as a string. This **only** works for primitive types (string, number, boolean, undefined or null).

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

When we want to differentiate between interface types.

```js
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

When we want to differentiate between class types.

```js
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

### Webpack

## <em class="type">Example 4</em> Addition

## <em class="type">Exercise 2</em> Celcius-Fahrenheit converter

## Data and view

## <em class="type">Example 5</em> Numbers sum

## <em class="type">Exercise 3</em> Task list
