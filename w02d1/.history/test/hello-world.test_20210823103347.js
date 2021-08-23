// pull in whichever assert library you'd like to use
const assert = require("assert"); // bringing code into our application

// pull in the main functions that will be tested
const sH = require("../hello-world"); // bring in our production code

// write the mocha describe() and it() function calls that will implement the test(s)

describe('tests for the standard functioning of sayHello', ()=>{

  // do the tests 
  it('produces the traditional hello world output', ()=>{
    // do the individual test here
    const valueThatCameBack = sH('World!');
    assert.equal(valueThatCameBack,"Hello, World!");
  });
  
});
