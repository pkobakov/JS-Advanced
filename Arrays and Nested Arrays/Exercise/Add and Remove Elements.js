function solve(commands){
    let array = [];
    array = commands;
    let num = 1; 
    let result = []; 

    for (let index = 0; index < array.length; index++) {
        
        if (array[index] === 'add') {
            result.push(num);
        } else if (array[index] === 'remove') {
            result.pop();
        } 
        
        num++;
    }
    
    if(result.length > 0)
    {
        result.forEach(element => {
            console.log(element);
        });

    } else{
        console.log('Empty');
    }
}

solve(['add', 'add', 'add', 'add']);
solve(['add','add', 'remove','add', 'add']);
solve(['remove', 'remove', 'remove']);