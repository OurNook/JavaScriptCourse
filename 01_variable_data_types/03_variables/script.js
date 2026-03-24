// Ways to declare a variable
// var, let, const

let firstName = 'Jamie';
let lastName = 'Mills';

console.log(firstName, lastName);

let age = 45;

console.log(age);

// Naming Conventions
// Only letters, numbers, underscores and dollor signs
// Can't start with a number

// Multi Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-Assigning Variables

age = 46;

console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

const arr = [1, 2, 3, 4];

arr.push(5);

console.log(arr);

const person = {
  name: 'Jamie',
};

person.name = 'George';

person.email = 'george@ournook.uk';

console.log(person);

// Declare multiple valuses at once

let a, b, c;

const d = 10,
  e = 11,
  f = 12;

console.log(d);
console.log(a);