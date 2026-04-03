const age = 45;

// Using an if statment

if (age >= 18) {
  console.log('You can Vote');
} else {
  console.log('You can not Vote');
}

// Using a ternary operator

age >= 18 ? console.log('You can Vote') : console.log('You can not Vote');

// Assigning a conditions value to a varibale

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can Vote' : 'You can not Vote';

console.log(canVote, canVote2);

// Multiple statements

const auth = true;
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// const redirect = auth
//   ? (alert('Welcome to the dashboard'), '/dashboard') 
//   : (alert('Access Denied'), '/login'); // Same as above using ternary

// console.log(redirect);

auth ? console.log('Welcome to the dashboard') : null;

auth && console.log("Welcome to the dashboard");