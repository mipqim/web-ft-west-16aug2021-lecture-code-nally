// pull in whichever assert library you'd like to use
const assert = require("assert"); // bringing code into our application

// pull in the main functions that will be tested
const prodCodeObj = require("../hello-world"); // bring in our production code

// write the mocha describe() and it() function calls that will implement the test(s)

describe('tests for the standard functioning of sayHello', ()=>{

  it('produces non-traditional output as well', ()=>{
    // do the individual test here
    const valueThatCameBack = prodCodeObj.sayHello('Sally!!');
    assert.equal(valueThatCameBack,"Hello, Sally!!");
  });

  it('produces the traditional hello world output', ()=>{
    // do the individual test here
    const valueThatCameBack = prodCodeObj.sayHello('World!');
    assert.equal(valueThatCameBack,"Hello, World!");
  });

});


describe('tests for the standard functioning of sayGoodbye', ()=>{

  it('produces non-traditional output as well', ()=>{
    // do the individual test here
    const valueThatCameBack = prodCodeObj.sayGoodbye('Sally!!');
    assert.equal(valueThatCameBack,"Goodbye, Sally!!");
  });

  it('produces the traditional goodbye world output', ()=>{
    // do the individual test here
    const valueThatCameBack = prodCodeObj.sayGoodbye('World!');
    assert.equal(valueThatCameBack,"Goodbye, World!");
  });

});
