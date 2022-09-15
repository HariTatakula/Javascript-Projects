const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      return "Invalid Input!";
    }
  };
  /*console.log(getUserChoice('scissors'));
  console.log(getUserChoice('rock'));
  console.log(getUserChoice('tomato'));*/
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  /*console.log(getComputerChoice());
  console.log(getComputerChoice());
  console.log(getComputerChoice());*/
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "The game is a tie!";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer Won!";
      } else {
        return "You Won!";
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return "You Won!";
      } else {
        return "Computer Won!";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer Won!";
      } else {
        return "You Won!";
      }
    }
    if (userChoice === "bomb"){
      return "You Won!";
    }
  };
  
  /*console.log(determineWinner("rock", "scissors"));
  console.log(determineWinner("paper", "scissors"));
  console.log(determineWinner("rock", "rock"));*/
  
  const playGame = () => {
    const userChoice = getUserChoice("bomb");
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw:" + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();
  