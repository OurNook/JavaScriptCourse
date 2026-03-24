// These values are stored on the stack
const name = 'Jamie';
const age = 45;

// Reference Values are stored on the heap

const person = {
  name: 'Gerorge',
  age: 13,
};

let newName = name;
newName = 'Anna'

let newPerson = person
newPerson.name = 'Arthur'

console.log(name, newName);
console.log(person, newPerson);