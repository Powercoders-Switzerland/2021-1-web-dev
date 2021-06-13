---
title: Python introduction
---

## Slides

Slides from the workshop: <https://erklär-mir-mal.ch/2021-1/09-01-intro-to-python.html>.

## <em class="type">Python Exercise 1</em> Greeting

Work in your exercises repository, in a file `04-python/greet.py`.

Define a function `greet(name)` that prints a greeting to the console.

For example, `greet("Ada")` should print `Hello Ada!`.

## <em class="type">Python Exercise 2</em> Sum

Work in your exercises repository, in a file `04-python/sum.py`.

Define a function `sum(array)` similar that sums up the elements of an array and returns the result.

For example, `print(sum([1, 2, 3]))` should print `6`.

Note: there is a built-in [`sum`](https://docs.python.org/3/library/functions.html#sum) function! (But here the goal is that you implement it yourself.)

## <em class="type">Python Exercise 3</em> Minimum

Work in your exercises repository, in a file `04-python/min.py`.

Define a function `min(array)` that returns the minimum element of an array.

For example, `print(min([2, 1, 3]))` should print `1`.

Note: there is a built-in [`min`](https://docs.python.org/3/library/functions.html#min) function! (But here the goal is that you implement it yourself.)

## Users data

List of dictionaries (equivalent of an array of objects in JavaScript) used for the two next exercises:

```python
users = [
	{
		"first_name": "Brain",
		"last_name": "Mohr",
		"age": 54
	},
	{
		"first_name": "Bella",
		"last_name": "VonRueden",
		"age": 17
	},
	{
		"first_name": "Franz",
		"last_name": "Raynor",
		"age": 28
	},
    {
		"first_name": "Celestino",
		"last_name": "Bailey",
		"age": 61
    }
]
```

## <em class="type">Python Exercise 4</em> Hello users

Work in your exercises repository, in a file `04-python/users_hello.py`.

Add the list of users from the previous slide.

Define a function `hello_users(users)` that outputs `My name is ??? and I am ??? years old`. for each user.

## <em class="type">Python Exercise 5</em> Group by age

Work in your exercises repository, in a file `04-python/adults_children.py`.

Add the list of users from the second previous slide.

Write a function `group_by_age(users)` that should return a dictionary of the form `{"adults": [ ... ], "children": [ ... ]}`, where each array only contains the corresponding users.

## <em class="type">Python Exercise 6</em> Random password generator

Work in your exercises repository, in a file `04-python/generate_password.py`.

Define a function `generate_password()` that returns a random password made of numbers, letters and the `-` and `_` characters. No other constraints.

## <em class="type">Python Exercise 7</em> Random password generator with constraints

Work in your exercises repository, in a file `04-python/generate_password_constrained.py`.

Define a function `generate_password_constrained()` that returns a random password made of numbers, letters and the `-` and `_` characters.

The result should contain at least one number and one special character.

**Note:** you can re-use the function defined in the previous exercise.
