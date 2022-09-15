/* This the code before fixing the scope of the Loose Variables



// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {

  if (event === 'Marathon') {
    let days = 50;
  } else if (event === 'Triathlon') {
    let days = 100;
  } else if (event === 'Pentathlon') {
    let days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = event => {
  const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(event);
logTime(days);
*/



// This code below  reflects after fixing the scope of the variables

// The scope of `random` is too loose

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return "Marathon";
    } else if (random === 1) {
      return "Triathlon";
    } else if (random === 2) {
      return "Pentathlon";
    }
  };
  
  // The scope of `days` is too tight
  const getTrainingDays = (event) => {
    let days;
    if (event === "Marathon") {
      days = 50;
    } else if (event === "Triathlon") {
      days = 100;
    } else if (event === "Pentathlon") {
      days = 200;
    }
  
    return days;
  };
  
  // The scope of `name` is too tight
  const name = "Nala";
  const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const event = getRandEvent();
  const days = getTrainingDays(event);
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime
  
  logEvent(name, event);
  logTime(name, days);
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = "Warren";
  
  logEvent(name2, event2);
  logTime(name2, days2);
  