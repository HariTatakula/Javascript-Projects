/* 
OBJECTS
Review
Way to go! You’re well on your way to understanding the mechanics of objects in JavaScript. By building your own objects, you will have a better understanding of how JavaScript built-in objects work as well. You can also start imagining organizing your code into objects and modeling real world things in code.

Let’s review what we learned in this lesson:

Objects store collections of key-value pairs.
Each key-value pair is a property—when a property is a function it is known as a method.
An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
You can access, add or edit a property within an object by using dot notation or bracket notation.
We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
We can navigate complex, nested objects by chaining operators.
Objects are mutable—we can change their properties even when they’re declared with const.
Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
We can iterate through objects using the For...in syntax.




The object that a method belongs to is called the calling object.
The this keyword refers to the calling object and can be used to access properties of the calling object.
Methods do not automatically have access to other internal properties of the calling object.
The value of this depends on where the this is being accessed from.
We cannot use arrow functions as methods if we want to access other internal properties.
JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
Setters and getter methods allow for more detailed ways of accessing and assigning properties.
Factory functions allow us to create object instances quickly and repeatedly.
There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
As with any concept, it is a good skill to learn how to use the documentation with objects!
You’re ready to start leveraging more elegant code for creating and accessing objects in your code!

Instructions
If you want to challenge yourself:

Find the value of this in a function inside of a method.
Learn the outcome of using a property that has the exact same name as a setter/getter method.
Create a new factory function that can create object instances of your choice.
Read documentation on other destructuring techniques and apply it to your code.
Try out other built-in object methods and learn what they do.
*/










let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};


// Advanced Objects -- using 'this' in the objects

const robot = {
    model:'1E78V2',
    energyLevel: 100,
    provideInfo() { 
      return ` I am ${this.model} and my current energy level is ${this.energyLevel}`
    }
  };
  console.log(robot.provideInfo());

  //Getters

  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if (typeof this._energyLevel === 'number') {
        return `My current energy level is ${this._energyLevel}`
      }
      else 
      { return "System malfunction: cannot retrieve energy level";
      }
    }
  };
  console.log(robot.energyLevel);
  
//setters

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if (typeof num ==='number' &&  num >=0 ){
        this._numOfSensors = num;
      }
       else {
         console.log("Pass in a number that is greater than or equal to 0");
       }
    }
  
  };
  
  robot.numOfSensors=100;
  console.log(robot.numOfSensors);

  
  //Factory Functions

  const robotFactory =(model,mobile) => {
    return{
    model: model,
    mobile: mobile,
    beep(){
      console.log("Beep Boop");
    }
  }
  };
  
  const tinCan = robotFactory('P-500',true);
  tinCan.beep();

  
  // Property Value Shorthand ---The top code can be rewritten as down below

  function robotFactory(model, mobile){
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)


  //Destructured Assignment


  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  const { functionality } = robot;
  functionality.beep();

  //Built-in Object Methods

  const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true});

console.log(newRobot);