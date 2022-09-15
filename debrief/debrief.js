//creating an object



const studentInfo = {
    userId: 10,
    email: 'abc@xyz.com',
    company:'Generation',
    role: 'student',
    personalInformation:
        { name: 'Alex',
          address:
          {
         street: 'watton',
        city: 'Melbourne',
        state: 'victoria',
        postcode: 3000
        },
       dob: '1/06/22'
        }
}

/*
for(let key in studentInfo){
    console.log(studentInfo[key]);
}*/
// creating a class with an instance
class CreateSchool {
    constructor(name,location,established){
        this.name=name;
        this.location=location;
        this.established=established;
    }
    displayInfo(){
        console.log(this.name, this.location,this.established);
    }
}
const McKillop = new CreateSchool('McKillop','Melbourne',1990);
McKillop.displayInfo();


// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));
// 
//McKillop = {''}


