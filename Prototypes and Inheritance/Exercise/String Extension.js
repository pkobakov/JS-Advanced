(function solve(){



    String.prototype.ensureStart = function(str) {
    
       return this.startsWith(str) ? this.toString() : str + this.toString(); 
    }
    
    String.prototype.ensureEnd = function(str){
        return this.endsWith(str) ? this.toString() : this.toString() + str;
    }
    
    String.prototype.isEmpty = function(){
        return this.length === 0 ? true : false; 
    }
    
    String.prototype.truncate = function(n){
       if (this.length <= Number(n)) {
         return this.toString();
       }
    
       if(Number(n) < 4){
           return '.'.repeat(Number(n));
       }
    
       let whitespaceIndex = this.toString().substring(0, n-2).lastIndexOf(' ');
       return lastWhitespace !== -1 
                ? `${this.toString().substring(0, whitespaceIndex)}...` 
                : `${this.toString().substring(0, n - 3)}...`;
    } 
    
    String.format = function(string, ...params) {
    
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }
    
        return string;
    
    }
})();
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
