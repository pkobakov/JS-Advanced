function biggerHalf(arr){
    let result = [];
    result = arr.sort((a,b) => a - b);
    let start = arr.length % 2 === 0 ? arr.length/2 : Math.round(arr.length / 2) - 1 ;
    result.splice(0, start);  

    return result;
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));