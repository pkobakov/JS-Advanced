function sameNumbers(numbers){
   let numsAsString = numbers.toString();
   let firstDigit = Number(numsAsString[0]);
   let isSame = true;
   let sum = firstDigit;

    for (let i = 1; i < numsAsString.length; i++) {
        let nextDigit = numsAsString[i];
        if(firstDigit !== nextDigit){
            isSame = false;
             
        } 

        sum += Number(numsAsString[i]);
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);