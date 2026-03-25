let x;

const person = {
  name: "Jamie Mills",
  age: 45,
  isAdmin: true,
  address: {
    street: "2 Samsons Close",
    city: "Brightlingsea",
    county: "Essex",
  },
  hobbies: ["gaming", "films"],
};

x = person.name;
x = person["age"];
x = person.address.county;
x = person.hobbies[0];

person.hasChildren = true;

person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

x = person;

console.log(x);
