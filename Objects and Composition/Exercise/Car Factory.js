function asd(car){
   let res = {
    model: car.model
   }

    let power = car.power;
    let small = {power: 90 , volume: 1800};
    let normal = {power: 120, volume: 2400};
    let monster =  {power: 200, volume: 3500};

    if(power <= 90){
       res.engine = small;
    } else if(power > 90 && power < 120){
       res.engine = normal;
    } else {
       res.engine = monster
    }

    let carriage  = car.carriage;

    if(carriage === 'hatchback'){
        res.carriage = { type: 'hatchback', color: car.color}
    } else{
        res.carriage = {type: 'coupe', color: car.color}
    }

    let wheels = car.wheelsize;

    if(wheels % 2 == 0){
        wheels-=1;
    }
    res.wheels = [wheels, wheels, wheels, wheels];

    return res;
}

asd({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)
