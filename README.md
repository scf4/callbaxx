<p align="center">⭐️⭐️⭐️</p>

<h1 align="center">🔥 Callbaxx 🔥</h1>

<p align="center">⭐️⭐️⭐️</p>

In recent years, a vocal portion of the JS community has forced the usage of "ES6" (essentially an entirely new language) onto the rest of the JS community. Proponents of this new language (known as "sixers") have been given free reign to make changes nobody asked for: a broken and incompatible module system, new language syntax like promises, async/await, rest/spread operators, "functional" features, and so on.  

JavaScript is now virtually unrecognizable. In fact, many people new to the language aren't even familiar with callbacks. 

This utility library aims to bring back classic JavaScript to the masses, with plenty of callbacks.

## Who is it for 🤔

Whether you're a classic JS developer who understands the beauty of real JavaScript  — *which still works just fine by the way* — or a new developer wary of current trends and looking for a timeless way to code for the web, this library is for you.

If you want to spend weeks playing around with webpacks and babble scripts and trying to keep up with new changes to the language, then this is not for you. 

This library is for real programmers who aren't afraid to get their hands a little dirty with real code.

## Roadmap 🚘 

**Callbaxx** is a brand new NPM package and is still under development. Please submit PRs to add your own functions!

And feel free to suggest other ideas for how we can Make JavaScript JavaScript Again! Callbaxx is just part of what will hopefully be a wider movement.

## Install 🖥

```js
npm install callbaxx
var callbaxx = require('callbaxx');
```

All functions are *error first*. This means the first argument of the callback is an error (hopefully null), and the second argument is the result of the function.

### add

Add two numbers together

```js
var add = require('callbaxx').add;

add(40, 2, function(err, res) {
  console.log('The result is ' + res + '!');
});

// Output: The result is 42!

```
### isNumber

Check if a value is a number

```js
var isNumber = require('callbaxx').isNumber;

isNumber(123, function(err, res) {
  if (res) {
    console.log('Yes, that is a number');
  } else {
    console.log('No, that is not a number, sorry');
  }
});

// Output: Yes, that is a number

isNumber('string', function(err, res) {
  if (res) {
    console.log('Yes, that is a number');
  } else {
    console.log('No, that is not a number, sorry');
  }
});

// Output: No, that is not a number, sorry

```

### isTrue

```js
var isTrue = require('callbaxx').isTrue;

// Check if value is equal to true
isTrue(true, function(err, res) {
  if (res) {
    console.log('It is true!');
  }
});

// Output: It is true!
```

### subtract

Subtracts the second number from the first number

```js
var subtract = require('callbaxx').subtract;

subtract(50, 8, function(err, res) {
  console.log('The result is ' + res + '!');
});

// Output: The result is 42!
```

### toLowerCase

Converts a string to lower case

```js
var toLowerCase = require('callbaxx').toLowerCase;

toLowerCase('FoO BaR!', function(err, res) {
  console.log(res);
});

// Output: foo bar!
```


### toUpperCase

Converts a string to upper case

```js
var toUpperCase = require('callbaxx').toUpperCase;

toUpperCase('hello world', function(err, res) {
  console.log(res);
});

// Output: HELLO WORLD
```
