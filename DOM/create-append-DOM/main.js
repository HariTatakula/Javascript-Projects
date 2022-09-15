// To create new Element
let newAttraction = document.createElement('li');
newAttraction.id = 'vespa';
newAttraction.innerHTML = 'Rent a Vespa';
document.getElementById('italy-attractions').appendChild(newAttraction);

// To Remove Element
let elementToRemove = document.getElementById('vespa');
document.getElementById('italy-attractions').removeChild(elementToRemove);

// To add Element on Click of a button
let element = document.querySelector('button');

function turnButtonRed(){
  // Add code to turn button red
 element.style.backgroundColor ='red';
 element.style.color = 'white';
 element.innerHTML ='Red Button';
 
}
element.onclick= turnButtonRed;

// Function To Add to the List on click of a button

let addButton=document.getElementById('buttonAdd');

function addToList(){
  
  let newAttraction = document.createElement('li');
  newAttraction.id = 'vespa';
  newAttraction.innerHTML = 'Rent a Vespa';
  document.getElementById('italy-attractions').appendChild(newAttraction);
}
addButton.onclick=addToList;

// Function to from the end of the list on a click of a button

let removeButton=document.getElementById('buttonRemove');

function removeFromList(){

let elementToRemove = document.getElementById('vespa');
document.getElementById('italy-attractions').removeChild(elementToRemove);
}
removeButton.onclick = removeFromList;