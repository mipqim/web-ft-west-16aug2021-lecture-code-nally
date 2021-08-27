const monkeyfuzz = require('./promise-generator');

const returnPromise = monkeyfuzz.returnPromise;

const promise = returnPromise('first promise', 4444);
console.log('Promise:',promise);


// Not the best way to do this

// setTimeout(()=>{
//   console.log("After:",promise);
// },5000);


//
// The RIGHT way to do this
//

promise
  .then((data) => {
    console.log("data:",data);
    return 'another thing';
  });
//   .then((data) => {
//     console.log("monkeyfuzz",data);
//   });

  