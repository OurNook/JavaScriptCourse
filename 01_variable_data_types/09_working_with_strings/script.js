let x;

const name = 'Jamie';
const age = 45;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' year old';

// Template Literals

x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods

const s = new String('Hello World');

x = s.length;

// Access value by key

x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('H');

x = s.substring(0, 4);
x = s.substring(7);

x = s.slice(-11, -6);

x = s.trim();

x = s.replace('World', 'Jamie');

x = s.includes('Hello');

x = s.valueOf();

x = s.split(' ')

console.log(x);
