//Parent Class called 'Media'
// defining getters and setters
// declaring methods


class Media {

    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [ ];
    }
  
    get  title(){
      return this._title;
    }

    get isCheckedOut(){
      return this._isCheckedOut;
    }

    get ratings(){
      return this._ratings;
    }

    set isCheckedOut(newIsCheckedOut){
        this._isCheckedOut = newIsCheckedOut;
     }

    toggleCheckOutStatus (){
      this.isCheckedOut = !this.isCheckedOut;
    }

    getAverageRating(){
      let ratingSum = this.ratings.reduce((currentSum,rating) => currentSum + rating, 0);
      
      return  ratingSum / this.ratings.length;
    }

    addRating(newRating){
       this.ratings.push(newRating);
    }
      
  }
  
  // Creating  'Book' child class which Inherits Parent 'Media'
  
  class Book extends Media {

    constructor (author,title,pages){
      super(title);
      this._author = author;
      this._pages = pages;
        
    }
    get author(){
      return this._author;
    }

    get pages(){
      return this._pages;
    }
  }
  
//  Creating  'Movie' child class which Inherits Parent 'Media'

  class Movie extends Media{

    constructor(director,title,runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }

    get director(){
      return this._director;
    }

    get runTime(){
      return this._runTime;
    }
    
  }
  

  // Creating Instance of 'Book' child class and passing values 

  const historyOfEverything = new Book ('Bill Bryson','A Short History of Nearly everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.title);
  console.log(historyOfEverything);
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log("Average Rating: ",historyOfEverything.getAverageRating());


// Creating   Instance of 'Movie' child class and passing values  
  
  const speed = new Movie('Jan de Bont','Speed',116);
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log("Average Rating : ",speed.getAverageRating());
  


  /* 
    Add more properties to each class (movieCast, songTitles, etc.)

    Create a CD class that extends Media.

    In .addRating(), make sure input is between 1 and 5.

    Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
    
    Create class called Catalog that holds all of the Media items in our library
*/
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  