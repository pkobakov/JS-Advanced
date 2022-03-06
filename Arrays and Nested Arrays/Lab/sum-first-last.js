function sumFirstLast(input) {
    let first = Number(input.shift());
    let last = Number(input.pop());

    let sum = first + last;

    console.log(sum);
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);