const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:
const checkSunglasses = checkAvailability('sunglasses','Favorite Supply Co.');
const checkPants = checkAvailability('pants','Favorite Supply Co.');
const checkBags = checkAvailability('bags','Favorite Supply Co.');


/* 
We declare myPromises assigned to invoking Promise.all().
We invoke Promise.all() with an array of three promises— the returned values from functions.
We invoke .then() with a success handler which will print the array of resolved values if each promise resolves successfully.
We invoke .catch() with a failure handler which will print the first rejection message if any promise rejects.

*/


Promise.all([checkSunglasses,checkPants,checkBags])
.then(onFulfill)
.catch(onReject);
