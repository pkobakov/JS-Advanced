function lastKNumbersSequence(n, k) {
    const sequence = [1];
    
    for(let i = 1; i < n; i++) {
        let tempArray = sequence.slice(-k);
        let sum = 0;
        for(let num of tempArray) {
            sum += num;
        }
        sequence.push(sum);
    }
    return sequence;
}


console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));



// You are given two integers n and k. Write a JS function that generates and return the following sequence:
// •	The first element is 1
// •	Every following element equals the sum of the previous k elements
// •	The length of the sequence is n elements
// The input comes as two number arguments. The first element represents the number n, and the second – the number k.
// The output is the return value of your function and should be an array of numbers.

// Input	Output
// 6, 3	   [1, 1, 2, 4, 7, 13]
