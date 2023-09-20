function solve(firstInput, secondInput){
    let sentence = firstInput;
    let delimiter = secondInput;
    let result = [];

    for (let i = 0; i < sentence.length; i++) {
        
        result.push(sentence[i]);
        result.push(delimiter);
    }

    result.pop();

    console.log(result.join(""));
}

solve(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
);

solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
);