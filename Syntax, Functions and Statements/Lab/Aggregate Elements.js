function AggregateElements(elements){

    aggregate(elements, 0, (x, y) => x + y);
    aggregate(elements, 0, (x, y) => x + 1/y);
    aggregate(elements, '', (x, y) => x + y);


    function aggregate(arr, initialVal, func){
         let value = initialVal;
         for (let i = 0; i < arr.length; i++) {          
            value = func(value, arr[i]);
        }
        console.log(value);       
    }
}
AggregateElements([1,2,4]);


