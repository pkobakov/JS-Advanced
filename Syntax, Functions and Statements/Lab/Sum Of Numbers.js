function SumOfNumbers(n, m){
    let num1 = Number(n);
    let num2 = Number(m);
    let sum = 0;

    for (let index = num1; index <= num2; index++){
        sum += index;
    }

    console.log(sum);
 }

 SumOfNumbers('1', '5');


