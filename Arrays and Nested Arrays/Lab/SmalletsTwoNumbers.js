function smallestTwoNumbers(arr){
    let result = [];
    let start = 0;
    let end = 2
    result = arr.sort((a,b) => a-b).slice(start,end).join(' ');
    return result;
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));