function solve(...params){
    let res = {};
      for (const element of params) {
        let type = typeof(element);
        console.log(`${type}: ${element}`);
        if (!res.hasOwnProperty(type)) {
            res[type] = 0;
        }

        res[type] = res[type] + 1 ; 

    }
    
    for (const [k,v] of Object.entries(res).sort((x, y) => y[1] - x[1])) {
        console.log(`${k} = ${v}`);
    }

}
solve({ name: 'bob'}, 3.333, 9.999);
console.log('------------------')
solve('cat', 42, function () { console.log('Hello world!'); });