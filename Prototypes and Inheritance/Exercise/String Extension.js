String.prototype.ensureStart = function(str) {

   return this.startsWith(str) ? this.toString() : str + this.toString(); 
}

String.prototype.ensureEnd = function(str){
    return this.endsWith(str) ? this.toString() : this.toString() + str;
}

String.prototype.isEpmty = function(){
    return this.length === 0 ? true : false; 
}

String.prototype.truncate = function(n){
   if (this.length <= Number(n)) {
     return this.toString();
   }

   if(Number(n) < 4){
       return '.'.repeat(Number(n));
   }

   let lastWhitespace = this.toString().substring(0, n-2).lastIndexOf(' ');
   return lastWhitespace !== -1 
            ? `${this.toString().substring(0, lastWhitespace)}...` 
            : `${this.toString().substring(0, n - 3)}...`;
} 

let result = 'Hello world';

console.log(result.truncate(5));