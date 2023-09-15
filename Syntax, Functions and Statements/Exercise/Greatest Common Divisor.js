function greatestCommonDivisor(x, y){
     if((typeof x !== 'number')||(typeof x !== 'number')){
        return false;
     }

     x = Math.abs(x);
     y = Math.abs(y);

     while(y){
        var t = y; 
        y = x % y;
        x = t;
     }

     return x;
}

console.log(greatestCommonDivisor(2154, 458));