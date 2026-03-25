const arr = [1, 2, 3, 4, 5];

// My Way
// arr.reverse().push(0);
// arr.unshift(6);
// console.log(arr);

arr.reverse();
arr.push(0);
arr.unshift(6);

console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// My Way
// x = arr2.splice(1)
// arr3 = Array.of(arr1, x)
// arr3 = arr3.flat();

const arr3 = arr1.slice(0, 4).concat(arr2)

console.log(arr3);
