// Using for-each Iterator


const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))



// using  .map()


const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});

console.log(numbers);
console.log(bigNumbers);

// using method map() ---------------- another example

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0])
  
console.log(secretMessage.join(''));

const bigNumbers1 = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers1.map(numbers => numbers / 100)



// ---------- filter() Method -----------------

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers1 = randomNumbers.filter(num => {
  return  num <250
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


 // Call .filter() on favoriteWords below
 const longFavoriteWords = favoriteWords.filter(words => {
   return  words.length > 7
 });
 console.log (longFavoriteWords);


 // ----------findIndex()  Method





 const animals1 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals1.findIndex (animal => {
  return animal === 'elephant'
})
console.log(foundAnimal);

const startsWithS = animals1.findIndex(animal => {
   return animal[0] === 's'
})
 console.log(startsWithS);



 // --------reduce() Method------------

// With one argument

 const newNumbers1 = [1, 3, 5, 7];

const newSum1 = newNumbers1.reduce(( accumulator,currentValue) => {
console.log('The value of accumulator:', accumulator);
console.log('The Value of currentValue:',currentValue);
return accumulator + currentValue ;

});

console.log(newSum1);

// after adding Second argument as '10' for the reduce() Method

const newNumbers2 = [1, 3, 5, 7];

const newSum2 = newNumbers2.reduce(( accumulator,currentValue) => {
console.log('The value of accumulator:', accumulator);
console.log('The Value of currentValue:',currentValue);
return accumulator + currentValue ;

} , 10);

console.log(newSum2);


/*====== some() Method  return either True or Flase*/

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(
  word => {
  return word.length > 5;
  }
);


// Make sure to uncomment the code below and fix the incorrect code before running it

 console.log(interestingWords.every((word) => { return word.length > 5 } ));



 /*

 ------------Final Example -------------*/

 const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);

