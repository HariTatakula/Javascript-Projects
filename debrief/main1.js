//create an object called ‘pen’ with the values of brand,
 //priceTag and starReview. Add an object called Inside with
 // the values of inkColor and ballPointTip. Print the object
 // pen to the console


const pen ={
    brand: 'Royal',
    priceTag : 45,
    starReview: 3,

    inside :{
        inkColor:"blue",
        ballPointTip: "sharp"
    }
}
console.log(pen);
console.table(pen);
console.log(pen.inside);
window.prompt("Hello");
localStorage.setItem('pen', JSON.stringify(pen));
console.log('hello');
var retrievedObject=localStorage.getItem('pen');
console.log('retievedObject:',JSON.parse(retrievedObject));