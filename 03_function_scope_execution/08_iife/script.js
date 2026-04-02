(function () {
  const user = 'Anna';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

(function (name) {
  console.log('Hello ' + name);
})('Jamie');

(function () {
  console.log('Hello');
})();
