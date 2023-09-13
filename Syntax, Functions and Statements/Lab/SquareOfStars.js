function SquareOfStars (count = 5){

    let string = '';

    for (let i = 0; i < count; i++) {
       
        for (let j = 0; j < count; j++) {

        string += "* ";
    }
     string += '\n';
  }   
    console.log(string);
}

SquareOfStars();