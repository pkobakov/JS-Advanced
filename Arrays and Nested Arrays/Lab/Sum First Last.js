function sumFirstLast(arr){
    let sum = 0;
   for (let i = 0; i < arr.length; i++) {
    let num1 = Number(arr.shift());
    let num2 = Number(arr.pop());
    sum += num1 + num2;
    
   }

   return sum;
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));