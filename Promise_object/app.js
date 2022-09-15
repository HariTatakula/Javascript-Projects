const inventory = {
    sunglasses: 1500,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:
  const myExecutor = (resolve,reject) => {
   if (inventory.sunglasses > 0){
     resolve('Sunglasses order processed.');
   } else {
   reject('That item is sold out.');
  }
  }


  function orderSunglasses(){
    return new Promise(myExecutor);
  }


  const orderPromise = orderSunglasses();
  console.log(orderPromise);


  /* 
  in the terminal type
  > node app.js
   1) to see the response
  2) change the input for 'sunglasses to 0'
  3) check the response

  
  */