function biggestElement(input){
    let result = input[0][0];

    for(let row of input){
        if(Math.max(...row) > result){
            result = Math.max(...row);
        }
    }

    return result;
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
   ));