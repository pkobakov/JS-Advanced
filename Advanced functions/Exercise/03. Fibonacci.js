function getFibonator (){
    let firstNumber = 0;
    let secondNumber =  1; 

    function fibonator(){
        let res = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = res; 
        return firstNumber;
    }

    return fibonator;
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
