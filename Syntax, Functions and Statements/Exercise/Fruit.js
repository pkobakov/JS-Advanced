function calculatePrice(product, grams, price){
    let gramsInKilos = grams/1000;
    let total = price*gramsInKilos;

    console.log(`I need $${total.toFixed(2)} to buy ${gramsInKilos.toFixed(2)} kilograms ${product}.`);
}

calculatePrice('orange', 2500, 1.80);