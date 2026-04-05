const colourObj = {
  colour1: 'red',
  colour2: 'blue',
  colour3: 'orange',
  colour4: 'green',
}

for (const key in colourObj) {
  console.log(key, colourObj[key]);
}

const colourArr = ['red', 'green', 'blue', 'yellow']

for (const colour in colourArr) {
  console.log(colour);
}