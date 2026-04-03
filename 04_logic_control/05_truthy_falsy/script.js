const email = 'jamie@ournook.uk';

if (email) {
  console.log('You passed in an email');
}

console.log(Boolean(email));

// Falsy Values
// - false
// - 0
// - "" or '' (Empty String)
// - null
// - undefined
// - Nan

// Truthy Values
// - Everything else that is not Falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x = NaN;

console.log(Boolean(x));

if (x) {
  console.log('This is Truthy');
} else {
  console.log('This is Falsy');
}

// Truthy and falsy caveats

const children = 0;

if (children !== undefined) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// Checking for empty arrays

const posts = [];

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}

// Checking for empty objects

const user = {};

if(Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}

// Loose Equality (==)

console.log(false == 0);
console.log('' == 0);
console.log(null == 0);

console.log(false === 0); // Strict Equality ===
console.log('' === 0);
console.log(null === 0);