const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty(){
  try{
    let dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`);
  }
  catch (error){
    console.log(error);
    console.log('Ordering a pizza!');
  }
}
hostDinnerParty();



/*
Synatax of async function using try....catch -----in the main javascript file

async function usingTryCatch() {
 try {

   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
   
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}
 
usingTryCatch();

*/
