function lastKNumbersSequence(n,k){
    const arr = [1];

    for (let i = 1; i < n; i++) {
        let tempArr = arr.slice(-k);
        let sum = 0;

        for (let i = 0; i < tempArr.length; i++) {
            sum += tempArr[i];
        }

        arr.push(sum);
    }

    return arr;
}

console.log(lastKNumbersSequence(6,3));
console.log(lastKNumbersSequence(8,2));