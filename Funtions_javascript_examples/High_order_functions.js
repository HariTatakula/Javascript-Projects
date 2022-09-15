// High order Functions


const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    return checkA === checkB ? func(val) : 'inconsistent results';  
  }
  
  console.log(checkConsistentOutput(addTwo, 10));
  


  // Another Example --- just the structure

  const higherOrderFunc = param => {
    param();
    return `I just invoked ${param.name} as a callback function!`
  }
   
  const anotherFunc = () => {
    return 'I\'m being invoked by the higher-order function!';
  }
   
  higherOrderFunc(anotherFunc);
  

  /*

  Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers.

We can work with functions the same way we work with any other type of data, including reassigning them to new variables.

JavaScript functions are first-class objects, so they have properties and methods like any other object.

Functions can be passed into other functions as parameters.

A higher-order function is a function that either accepts functions as parameters, returns a function, or both.
*/

