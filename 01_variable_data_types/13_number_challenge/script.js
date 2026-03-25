const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

// Get The Sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`

// Get The Difference
const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`

// Get The Product
const product = x * y;
const productOutput = `${x} * ${y} = ${product}`

// Get The Quotient 
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`

// Get The Remainder
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);