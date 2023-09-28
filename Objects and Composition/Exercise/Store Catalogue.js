function solve(data){
   
    data.sort((a,b) => a.localeCompare(b));

    let letter;

    for (let el of data) {
        if(el[0] !== letter){
            letter = el[0];
            console.log(letter);
        }

        let[product, price] = el.split(' : ');
        console.log(` ${product}: ${price}`);
    }
}

solve(['Appricot : 20.4',
       'Fridge : 1500',
       'TV : 1499',
       'Deodorant : 10',
       'Boiler : 300',
       'Apple : 1.25',
       'Anti-Bug Spray : 15',
       'T-Shirt : 10']


);