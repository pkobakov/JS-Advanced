function solve(arr){
    arr = arr.sort((a, b) => a.localeCompare(b))
    arr.forEach((x, i) => console.log(`${i+1}.${x}`))
}


solve(["John", "Bob", "Christina", "Ema"]);