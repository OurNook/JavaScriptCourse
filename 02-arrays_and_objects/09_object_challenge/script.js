const library = [
  {
    title: "Bill Gates",
    author: "Chuck Norris",
    status: { own: true, reading: false, read: false },
  },
  {
    title: "Theory",
    author: "Jamie Mills",
    status: { own: true, reading: false, read: false },
  },
  {
    title: "Friends",
    author: "Anna Gidlow",
    status: { own: true, reading: false, read: false },
  },
];


library[0].status.read = true
library[1].status.read = true
library[2].status.read = true


console.log(library);