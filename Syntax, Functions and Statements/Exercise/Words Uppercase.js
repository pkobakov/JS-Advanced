function wordsUppercase(sentence){

    return sentence.toUpperCase().match(/\w+/g).join(', ');
   
}

console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('Hello'));

