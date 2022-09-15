let secretMessage = [
    "Learning",
    "is",
    "not",
    "about",
    "what",
    "you",
    "get",
    "easily",
    "the",
    "first",
    "time,",
    "it",
    "is",
    "about",
    "what",
    "you",
    "can",
    "figure",
    "out.",
    "-2015,",
    "Chris",
    "Pine,",
    "Learn",
    "JavaScript",
  ];
  
  //Initial length of the string
  console.log(secretMessage.length);
  secretMessage.pop();
  
  // After pop length
  console.log(secretMessage.length);
  
  //To add to the string
  secretMessage.push("to", "Program");
  console.log(secretMessage);
  //Out put "Programming is not about what you know, it is about what you can figure out. -2015, Chris Pine, Learn to Program"
  
  // change the word to a new word
  secretMessage[7] = "right";
  console.log(secretMessage);
  
  //To remove first string in the array
  secretMessage.shift();
  console.log(secretMessage);
  
  // To add the string at the beginning
  secretMessage.unshift("Programming");
  console.log(secretMessage);
  
  //To remove strings and replace with another
  secretMessage.splice(6, 5, "know");
  //console.log(secretMessage);
  // To print secret Message by removing '' in the array
  console.log(secretMessage.join(" "));

  // The output will be
  //Programming is not about what you know, 
 // it is about what you can figure out. -2015, Chris Pine,
   //Learn to Program