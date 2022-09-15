class School {
    constructor(name, _level ,numberOfStudents){
      this._name = name;
      this._level = ['primary','middle','high'];
      this._numberOfStudents = numberOfStudents;
    }

    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }

    set numberOfStudents(value){
      if (typeof value === number){
      return this._numberOfStudents = value;
      } else {
       return 'Invalid Input Number of Students should be a number!!';
    }
    }

    quickFacts(){
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }

   static pickUpSubstituteTeacher(substituteTeachers){
   let myIndex = Math.floor((substituteTeachers.length-1) * Math.random());
     return substituteTeachers[myIndex];
    }
}

class PrimarySchool  extends School {
  constructor(name, numberOfStudents, pickUpPolicy) {
  super(name,'primary',numberOfStudents);
  this._pickUpPolicy = pickUpPolicy;
}
get pickUpPolicy (){
  return this._pickUpPolicy;
}
}

class MiddleSchool extends School{
    constructor (name){
    super(name);
  }
}

class HighSchool extends School{

    constructor(name, numberOfStudents, sportsTeams){
    super(name,'high',numberOfStudents);
    
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams(){
    return this._sportsTeams;
  }
}

//Instances of PrimarySchool and HighSchool

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

 lorraineHansbury.quickFacts();

 console.log('school level',lorraineHansbury.level[0]);

 // calling the Static method directly from parent Class

 const sub = School.pickUpSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

 // Create HighSchool Instance

 const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);












