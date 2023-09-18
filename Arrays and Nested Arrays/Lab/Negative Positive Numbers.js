function negativePositiveNumbers(arr){
    let result = [];

    for (const num of arr) {
        if (num < 0) {
            result.unshift(num);
        } else{
          result.push(num);
        }
    }

    for (const num of result) {
        
        console.log(num);
    }
}

negativePositiveNumbers([7, -2, 8, 9]);