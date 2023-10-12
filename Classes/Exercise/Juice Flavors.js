function solve(data){

    let fruits = new Map();
    let bottles = new Map();

    for (const el of data) {
        let [fruit, quantity] = el.split(' => ');

        if (!fruits.has(fruit)) {
            fruits.set(fruit, Number(quantity));
        } else{
            fruits.set(fruit, fruits.get(fruit) + Number(quantity));
        }

        if (fruits.get(fruit) >= 1000) {
            let bottle = parseInt(fruits.get(fruit) / 1000);
            fruits.set(fruit, fruits.get(fruit) - bottle * 1000);
            
            if (!bottles.has(fruit)) {
                bottles.set(fruit, bottle);
            } else{
                bottles.set(fruit, bottles.get(fruit) + bottle);
            }

        }
    }
    
    for (const [fruit, bottls] of bottles) {
        console.log(`${fruit} => ${bottls}`);
    }
    
}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);