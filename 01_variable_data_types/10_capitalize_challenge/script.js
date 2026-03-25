const myString = 'developer';

x = myString.substring(0, 1);
y = x.toUpperCase();
z = myString.charAt(0);
myNewString = myString.replace(z, y);

// Solution 1
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
myNewString = myString[0].toUpperCase() + myString.substring(1);
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;



console.log(myNewString);
