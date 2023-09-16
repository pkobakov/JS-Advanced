function wordsUppercase(sentence){

    // Solution 1:
    let result = [];
    let buffer = "";

    for (let i = 0; i < sentence.length; i++) {
        let chCode = sentence.charCodeAt(i);


        if((chCode >= 65 && chCode <= 90) || (chCode >= 97 && chCode <= 122)){
            buffer += sentence[i];
        } else{
            result.push(buffer.toUpperCase());
            buffer = "";
        }
    }

    if(buffer){
        result.push(buffer.toUpperCase());
    }

    return result.toString().match(/\w+/g).join(', ');

    // Solution 2:
    //return sentence.toUpperCase().match(/\w+/g).join(', ');
   
}

console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('Hello'));

