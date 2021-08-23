// implement a function called sayHello that takes the name of the saluted and returns what would be said.
const sayHello = (name) => {
  const output = `Hello, ${name}`;
  return output;
};

// show some test code here at first, and then factor it out later
const valueThatCameBack = sayHello('World!');
console.log('output:', valueThatCameBack);

// make the functions exportable
