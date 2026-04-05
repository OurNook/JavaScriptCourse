// Loop through Arrays

const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Jamie' }, { name: 'Anna' }, { name: 'George' }];

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// for (const item of items) {    // Same as above but as a for of loop
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}

// Loop over Strings

const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

// Loop over maps

const map = new Map();
map.set('name', 'Jamie');
map.set('age', 45);

for (const [key, value] of map) {
  console.log(key, value);
}
