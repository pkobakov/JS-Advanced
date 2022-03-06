function negative_positive(input) {

    let result = [];

    for (let index = 0; index < input.length; index++) {
       
        let currentNum = Number(input[index]);

        if (currentNum < 0) {
             
            result.unshift(currentNum);
        }
        
        else {
            result.push(currentNum);
        }
    }

    console.log(result.join('\r\n'));
}  

negative_positive([7, -2, 8, 9]);
negative_positive([3, -2, 0, -1]);