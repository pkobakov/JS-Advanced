function sameNumbers(numbers){
   let numsAsString = numbers.toString();
   let firstDigit = numsAsString[0];
   let isSame = true;
   let sum = 0;

    for (let i = 0; i < numsAsString.length; i++) {
        let nextDigit = numsAsString[i];
        if(firstDigit !== nextDigit){
            isSame = false;
             
        } 

        sum += Number(numsAsString[i]);

       

    }

    console.log(isSame);
    console.log(sum);
}
sameNumbers(2222222
    );
sameNumbers(1234);