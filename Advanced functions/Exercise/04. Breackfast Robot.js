function breackfastRobot(){
    
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade:{
            carbohydrate: 10, 
            flavour: 20
        },
        burger:{
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey:{
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10 
        }
    
    }

    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function manager(command){
        let token = command.split(' ');
        let action = token[0];
        let microElement = token[1];
        let quantity = token[2];

        switch(action){
           case 'restock': return restock(microElement, quantity); break;
           case 'prepare':  return prepare(microElement, quantity); break;
           case 'report': return report(); break;
        }

    }

    function restock(micElement, qty){
         store[micElement] += Number(qty);
         return 'Success'
    }

    function prepare(recipe, quantity){

        let prepareRecipe = {};

        for (const [micEl, value] of Object.entries(recipes[recipe])) {
            let requiredQty = value * quantity;

            if (store[micEl] < requiredQty) {
                return `Error: not enough ${micEl} in stock`;                   
            } 
            
            prepareRecipe[micEl] = requiredQty;
        }
         
        
        for (const [element, value] of Object.entries(prepareRecipe)) {
            store[element] -= value;
        }

        return 'Success';
    }

    function report(){
        return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
    }
}

let manager = breackfastRobot();
console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));

//  
//  
// 
// 
// 
// 
// 
// report





//console.log(library.lemonade.carbohydrate);