function solve(arr){
    // let res = arr.sort((a,b) => {
    //     if(a.length != b.length){
    //         return a.length - b.length
    //     } else{
    //         return a.localeCompare(b)
    //     }
    // });

    let res = arr.sort().sort((a, b) => a.length - b.length);


    console.log(res.join('\n'));
}

solve(['alpha','beta', 'gamma']);