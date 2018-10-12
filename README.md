<div align="center"><br />
  <img src="https://i.imgur.com/uY5D1Y3.png" width="300px" height="87.5px" />
  
  <img src="https://img.shields.io/github/issues/scf4/callbaxx.svg" /> <img src="https://img.shields.io/bundlephobia/min/callbaxx.svg" /> <img src="https://img.shields.io/github/stars/scf4/callbaxx.svg" />

<br /></div>

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

## Docs

### Arrays

#### isArray()

Check if a value is an array

```js
var isArray = require('callbaxx').isArray;

var myArr = [1, 2, 3];

isArray(myArr, function(err, res) {
  if (res) {
    console.log('Wow what an array! It has ' + myArr.length + ' items.');
  } else {
    console.log('Hmm that does not look like an array...');
  }
});

// Output: Wow what an array! It has 3 items.

```

#### map()

Returns a new array with a provided function called on each item of the provided array

```js
var map = require('callbaxx').map;

map([1, 4, 9, 16, 25], Math.sqrt, function(err, res) {
  console.log(res);
});

// Output: [1, 2, 3, 4, 5]

```

#### reduce()

Smoosh a given array into a single value

```js
var reduce = require('callbaxx').reduce;

reduce([1, 2, 3], function (a, b) { return a + b }, 0, function(err, res) {
    console.log(res);
});

// Output: 6

```

### Booleans

#### isTrue()

Check if a value is equal to true

```js
var isTrue = require('callbaxx').isTrue;

isTrue(true, function(err, res) {
  if (res) {
    console.log('It is true!');
  }
});

// Output: It is true!
```

#### isFalse()

Check if a value is equal to false

```js
var isFalse = require('callbaxx').isFalse;

isFalse(123, function(err, res) {
  if (res) {
    console.log('It is false!');
  } else {
    console.log('It is NOT false!');
  }
});

// Output: It is NOT false!
```

### Numbers

#### add()

Add two numbers together

```js
var add = require('callbaxx').add;

add(40, 2, function(err, res) {
  console.log('The result is ' + res + '!');
});

// Output: The result is 42!

```

#### divide()

Divides the first number by the second number

```js
var divide = require('callbaxx').divide;

divide(25, 5, function(err, res) {
  console.log(res);
});

// Output: 5

```

#### multiply()

Multiplies two numbers together

```js
var multiply = require('callbaxx').multiply;

multiply(6, 7, function(err, res) {
  console.log(res);
});

// Output: 42

```

#### modulo()

Finds the remainder after dividing the first number by the second number

```js
var modulo = require('callbaxx').modulo;

modulo(5, 3, function(err, res) {
  console.log(res);
});

// Output: 2
```

#### subtract()

Subtracts the second number from the first number

```js
var subtract = require('callbaxx').subtract;

subtract(50, 8, function(err, res) {
  console.log('The result is ' + res + '!');
});

// Output: The result is 42!
```

#### isNumber()

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

#### isOdd()

Check if a number is odd

```js
var isOdd = require('callbaxx').isOdd;

isOdd(11, function(err, res) {
  if (res) {
    console.log('Odd number detected!');
  }
});

// Output: Odd number detected!

```

#### isEven()

Check if a number is even

```js
var isEven = require('callbaxx').isEven;

isEven(8, function(err, res) {
  if (res) {
    console.log('Even number detected!');
  }
});

// Output: Even number detected!

```

### Objects

#### isObject()

Check if a value is an object

```js
var isObject = require('callbaxx').isObject;
var isTrue = require('callbaxx').isTrue;

var myObj = { abc: 123 };

isObject(myObj, function(err1, objRes) {
  isTrue(objRes, function(err2, res) {
    if (res) {
      console.log('This is an object!');
    }
  });
});

// Output: This is an object!

```

### Strings

#### toLowerCase()

Converts a string to lower case

```js
var toLowerCase = require('callbaxx').toLowerCase;

toLowerCase('FoO BaR!', function(err, res) {
  console.log(res);
});

// Output: foo bar!
```


#### toUpperCase()

Converts a string to upper case

```js
var toUpperCase = require('callbaxx').toUpperCase;

toUpperCase('hello world', function(err, res) {
  console.log(res);
});

// Output: HELLO WORLD
```

## License

Callbaxx is [MIT licensed](LICENSE).
