function piece_of_pie(array = [], startIndex, endIndex) {

    let start =  array.indexOf(startIndex);
    let end = array.indexOf(endIndex);

    return array.slice(start,end+1);
    
   
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