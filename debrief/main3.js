const person = {
    firstName: 'jenny',
    secondName: 'Smith',
    birthYear: 1970,
    job: 'developer',
    friends: ['Michelle', 'Paul', 'Claire'],

    get greeting()  {

        window.prompt("hello");

    }
    }

   const greeting1= person.greeting();
   console.log(greeting1);
