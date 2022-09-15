//Parent Class Declaration----Inheritance III

class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
    
    // creating static method in the parent class

    static generatePassword(){
        const randomNumber = Math.floor(Math.random() * 10000);
        return randomNumber;
      }
}
  
  // creating child class using Parent Class
  
  class Nurse extends HospitalEmployee{
     constructor(name,certifications){
       super(name);
       this._certifications = certifications;
     }

     // adding getters in the child

     get certifications(){
        return this._certifications;
     }
   
    // adding methods in the child class

    addCertification (newCertification){
        this._certifications.push(newCertification);
      }
  }

  const nurseOlynyk = new Nurse('Olynyk',['Trauma', 'Pediatrics']);


// to call the child class , which inturns calls the parent class

nurseOlynyk.takeVacationDays(5);
console.log('number of leaves remaining are :' ,nurseOlynyk.remainingVacationDays);


// calling the methods in the child class

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

// calling the static method from the parent class ---which can only be called from the parent class

console.log(HospitalEmployee.generatePassword());