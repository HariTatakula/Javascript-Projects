//const castle{

//}

//let’s create another object, with a person named jenny
//firstName: 'jenny',
//secondName: 'Smith',
//birthYear: 1970,
//job: 'developer',
//friends: ['Michelle', 'Paul', 'Claire']

const person = {
firstName: 'jenny',
secondName: 'Smith',
birthYear: 1970,
job: 'developer',
friends: ['Michelle', 'Paul', 'Claire']
}
console.log(person);
person.job ='tester';
console.log(person);
console.log(person.friends)

// to add a property to object
person.sex='f'
console.log(person);

// to delete a property of object
delete person.sex
console.log(person);