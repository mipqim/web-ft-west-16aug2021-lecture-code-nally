const assert = require("assert"); // bringing code into our application
const prodCodeObj = require("./hello-world"); // bring in our production code

// run the function with a test value
const valueThatCameBack = prodCodeObj.sH('World!');

assert.equal(valueThatCameBack,"Hello, World!");
// console.log('output:', valueThatCameBack);
