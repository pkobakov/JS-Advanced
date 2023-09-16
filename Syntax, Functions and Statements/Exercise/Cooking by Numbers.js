function cookingByNumbers(startPoint, ...params){
     let number = Number(startPoint);
     const chop = 'chop';
     const dice = 'dice';
     const spice = 'spice';
     const bake = 'bake';
     const fillet = 'fillet';
     const commands = params;

     for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];

        switch(currentCommand){
           case chop: number /= 2  ; break;
           case dice: number = Math.sqrt(number); break;
           case spice: number += 1; break;
           case bake:number *= 3; break;
           case fillet: number -= number*0.2; break;
        }
        
        console.log(number);
     }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('--------------------------------------------------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');