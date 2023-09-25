function solve(names){
   names = names.sort();
   let counter = 1;
   for (let name of names) {
       console.log(`${counter}. ${name}`);
       counter++;
   }
   
}

solve(["John", "Bob", "Christina", "Ema"]);