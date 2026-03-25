let d;

d = new Date();

d = new Date(1980, 11, 27, 12, 30);

d = new Date('1980-12-27T12:30:00')
d = new Date('12/27/1980 12:30:30')

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

d = Date.now();

d = new Date()
d = d.getTime();

d = new Date(1774438318934);

console.log(d);