function pieceOfPie(pies, firstPie, secondPie){
    let indexFirst = pies.indexOf(firstPie);
    let indexSecond = pies.indexOf(secondPie);

    let result = [];
    result = pies.slice(indexFirst, indexSecond + 1);
    return result;
}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));