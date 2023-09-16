function cookingByNumbers(startPoint, firstMove, secondMove, thirdMove, fourthMove, fifthMove){
     let number = Number(startPoint);
     let chop = 'chop';
     let dice = 'dice';
     let spice = 'spice';
     let bake = 'bake';
     let fillet = 'fillet';
     let commands = [firstMove, secondMove, thirdMove, fourthMove, fifthMove];

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