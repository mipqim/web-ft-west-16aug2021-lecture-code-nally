const assert = require("assert"); // bringing code into our application

// run the function with a test value
const valueThatCameBack = sayHello('World!');

assert.equal(valueThatCameBack,"Hello, World!");
console.log('output:', valueThatCameBack);
