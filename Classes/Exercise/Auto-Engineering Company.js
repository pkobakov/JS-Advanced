function carsFactory(data){
    let cars = new Map();

    data.forEach(line => {
        let[make, model, quantity] = line.split(' | ');
        quantity = Number(quantity);

        if(!cars.has(make)){
            let models = new Map();
            cars.set(make, models);
        }

        if (cars.get(make).has(model)) {
            cars.get(make).set(model, cars.get(make).get(model) + quantity);
        } else {
            cars.get(make).set(model, quantity);
        }
    });

    for (const [make, car] of cars.entries()) {
        console.log(`${make}`)
        for (const [model, quantity] of car.entries()) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

carsFactory(
['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)