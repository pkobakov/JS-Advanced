function solve(input){

    let result = [];
    let biggestNumber = input.shift();
    result.push(biggestNumber)

    for (element of input) {
        if(element >= biggestNumber){
            result.push(element);
            biggestNumber = element;
        } 
        
    }

    return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([20, 3, 2, 15, 6, 1]));