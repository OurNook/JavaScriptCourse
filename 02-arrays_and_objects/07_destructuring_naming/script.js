const firstName = "Jamie";
const lastName = "Mills";
const age = 45;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring

const todo = {
  id: 1,
  title: "take out trash",
  user: {
    name: "Jamie",
  },
};

const {
  title,
  id: todoId,
  user: { name },
} = todo;

console.log(todoId);

// Destucture Arrays
const numbers = [23, 67, 33, 49];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
