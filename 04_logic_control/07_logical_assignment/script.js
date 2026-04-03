// || - Will return the first Truthy value or the last value

let a = false;

if (!a) {
  a = 10;
}

a == a || 10; // Same as above if false set to 10

a ||= 10 // Same again but shorter

// && - Will return the first falsy value or the last value

let b = 10

if(b) {
  b = 20
}

b = b && 20 

b &&= 20
console.log(b);

// ?? - Returns the right side operator when the left is null or undefined

let c = null

if(c === null || c === undefined) {
  c = 20
}

c = c ?? 20

c ??= 20

console.log(c);