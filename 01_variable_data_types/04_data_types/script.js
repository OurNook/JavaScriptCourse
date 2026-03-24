// String

const firstName = 'Jamie';

// Number

const age = 46;
const temp = 90.9;

//Boolean

const hasKids = true;

// Null

const aptNumber = null;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/operators/typeof#typeof_null

//Undefined

// let score;
const score = undefined;

// Symbol

const id = Symbol('id');

// BigInt

const n = 9907199254740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Jamie',
};

function sayHello() {
  console.log('Hello');
}

// https://262.ecma-international.org/5.1/#sec-11.4.3

const output = sayHello;
console.log(output, typeof output);
