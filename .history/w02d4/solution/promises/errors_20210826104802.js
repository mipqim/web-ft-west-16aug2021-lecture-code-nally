const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

// throw new Error('ooooops');

returnPromise('one')
  .then((data) => {
    console.log('first then clause:',data);
    return returnPromise('two');
  })
  .catch((err) => {
    // throw err;
    console.log('Error:',err);
  })
  .then((data) => {
    console.log('second then clause:',data);
    return returnPromise('three');
  })
  .then((data) => {
    console.log('third then clause:',data);
    return returnRejectedPromise('four');
  })
  .then((data) => {
    console.log('fourth then clause:',data);
    return returnPromise('five');
  })
  .then((data) => {
    console.log('fifth then clause:',data);
    return returnPromise('six');
  })
  ;
