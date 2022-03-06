function piece_of_pie(input = []) {
    let array = input[0];
    let start = input[1];
    let end = input[2];


    for (let index = 0; index < array.length; index++) {
        
        if (start == array[index]) {
            start = index;
        }

        else if (end == array[index]) {
            end = index;
        }
        
    }

    let result = array.slice(start,end+1);
    console.log(result);
   
}

piece_of_pie([['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
]);

piece_of_pie([['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
]);