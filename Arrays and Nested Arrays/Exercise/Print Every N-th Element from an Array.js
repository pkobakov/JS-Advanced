function solve(arr, n){
    let result = [];

    for (let index = 0; index < arr.length; index+=n) {
        
        result.push(arr[index]);
    }

    return result;
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);

solve(['dsa',
'asd', 
'test', 
'tset'], 
2
);