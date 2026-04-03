console.log(10 > 20 && 30 > 15); // && 'and' all have to be true
console.log(10 > 20 || 30 > 15); // || 'or' only one needs to be true

// && - Will return the first falsy value or the last value

let a;

a = 10 && 20
a = 10 && 20 && 30
a = 10 && 0 && 30

console.log(a);

const posts = ['Post One', 'Post Two']

posts.length > 0 && console.log(posts[0]);

// || - Will return the first Truthy value or the last value

let b;

b = 10 || 20
b = 0 || 20
b = 0 || null || "" || undefined

console.log(b);

// ?? - Returns the right side operator when the left is null or undefined

let c

c = 10 ?? 20
c = null ?? 20
c = undefined ?? 30
c = 0 ?? 30

console.log(c);