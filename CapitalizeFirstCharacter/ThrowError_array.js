function capAllElements(arr)
{

    try{arr.forEach((el, index, array) => {
        array[index] = el.toUpperCase();
      });
     }
        catch(e){
          console.log(e);
      }
      }
    // to check whether input is array or not
    
    capAllElements('Incorrect argument');