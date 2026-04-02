// Challenge 1

// function getCelsius(temp) {
//   return (temp - 32) * 5 / 9;
// }

const getCelsius = (temp) => ((temp - 32) * 5) / 9;

console.log(`The temperature is ${getCelsius(40)}\xB0C`);

// Challenge 2

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 3, 4, 5, 6, 7]));

// Challege 3

((length, width) => {
  const area = length * width;
  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;
  console.log(output);
})(10, 5);
