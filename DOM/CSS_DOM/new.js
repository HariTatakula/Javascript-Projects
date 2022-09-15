 let count = 0;
            
            console.log("Starting Loop");

            do {
               console.log("Current Count : ", count);
               count++;
            }
           while (count < 5)

            console.log ("Loop stopped!");

////////////////////////////////////////////////////
            function concatenate(first, last) {
                var full;
               full = `My name is ${first} ${last} !`;
               return full;
               
              }
              function getName(firstName, lastName) {
                var result;
                result = concatenate(firstName, lastName);
                console.log(result );
              }
              getName("Zara", "Williams");
            
        //Code snippet to print object with keys and values

              const address = {
                street1: '11 Broadway',
                street2: '2nd Floor',
                city: 'New York',
                state: 'NY',
                zipCode: "10004"
              };
              
              for (const key in address) {
                console.log(key + ": " +address[key]);
              }          
// how to use 'for ..... of ' in an array


const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let j =0;
for (const i of myArray) {
  console.log('value in an array of data',myArray[j],i);
  j++;
}

// HOW TO USE FOR .. IN STATEMENT FOR AN OBJECT
const address1 = {
  street1: '11 Broadway',
  street2: '2nd Floor',
  city: 'New York',
  state: 'NY',
  zipCode: "10004"
};

for (const key in address1) {
  console.log(key + ": " +address1[key]);
}

/////SCRIPT TO UPDATE AN OBJECT WITH FUNCTION
function updateObject() {

  const Menu = {
      kruti: "Sandwiches",
      paula: "Coffee",
      anneMarie: "Pan Cakes",
      vikki: "White wine",
      sawa: "Donuts",
      dayna: "Cake",
  }

  let nameVal1 = document.getElementById("personName").value;

  let foodVal1 = document.getElementById("foodChoice").value;
  
  Menu[nameVal1] = foodVal1;


  let tagLine = `Have a happy meal ${nameVal1}. Good choice of ${Menu[nameVal1]}`;

  document.getElementById("messagePara").innerText = tagLine;



  console.log(Menu);

}