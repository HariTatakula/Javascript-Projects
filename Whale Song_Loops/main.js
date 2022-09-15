let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

//To find  Vowels in string
for (let i = 0; i < input.length; i++) {
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }


//If match found , push in the new string
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      console.log("letter Matches: " + input[i], vowels[j]);
      console.log("New String is: "+ resultArray);
    }
  }
}
// Deleting spaces, changing to Uppercase, and logging to console
let resultString = resultArray.join("");
resultString = resultString.toUpperCase();
console.log("The Whale Song is:" + resultString);
