//This is a single line of code

/*
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);

*/

const x = 100;

console.log(x);

console.error('Alert');

console.warn('Warning');

console.table({ name: 'Jamie', email: 'jamie@ournook.uk' });

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const style = 'padding:  10px; background-color: white; color: green';

console.log('%cHello World', style);

// cmd + / will comment a line anywhere
// /* at start */ at end will multiline comment

// cmd left/right will move to start or end of line
// opt left/right will move one word at a time
// opt up/down will move line within code
// opt + shift + up/down will copy line 
// hightlight instance, cmd + d selects next instance
// hightlight instance, cmd + shift + l selects all instances
// cmd + shift + o, search for file
// cmd + f, find on page
// cmd+ opt + f, replace on page
// cmd + b, toggle sidebar 
// ctl + shift + `, brings up console