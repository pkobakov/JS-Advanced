function solve(arr, sort){
    return sort === 'asc' ? arr.sort((x, y) => x - y) : arr.sort((x, y) => y - x);
     
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));