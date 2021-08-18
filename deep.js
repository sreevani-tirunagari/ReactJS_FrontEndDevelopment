var deepEqual = function (x, y) {
    if (x === y) {
      console.log(true);
    }
    else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
      if (Object.keys(x).length != Object.keys(y).length)
        console.log(false);
  
      for (var prop in x) {
        if (y.hasOwnProperty(prop))
        {  
          if (! deepEqual(x[prop], y[prop]))
          console.log(false);
        }
        else
        console.log(false);
      }
      
      console.log(true);
    }
    else 
    console.log(false);
  }
deepEqual(2,"2");
