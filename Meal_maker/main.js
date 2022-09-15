// USES GETTERS AND SETTERS 


const menu = {
    _meal: ' ' ,
    _price: 0 ,

    set  meal(mealToCheck){
       if (typeof mealToCheck === 'string') {
       return this._meal = mealToCheck ;
       } 
    } ,
    
      set price(priceToCheck){
        if (typeof priceToCheck === 'number') {
          return this._price = priceToCheck;
        }
      } ,
    
      // To check for both meal and price have values
     get todaysSpecial(){
      if (this._meal && this._price ){
        return `Today's Special is ${this._meal} for $ ${this._price}` ;
      } else
      return `Mela or Price was not set correctly!` ;
     }
     }
    
    
    /* to see how not type checking these values could cause confusion for a website visitor!
    */
    menu.meal = 4;
    menu.price = 'cookie';
    console.log(menu);
    
    // checking by passing correct datatypes
     menu.meal = "pizza";
     menu.price = 4;
     console.log(menu);
    
     // using Getter to log Today's Special
    
     console.log(menu.todaysSpecial);
    
    
     /* Instead of single value for meal and price, They can be assinged an array of values and check special for everyday of the week */
    