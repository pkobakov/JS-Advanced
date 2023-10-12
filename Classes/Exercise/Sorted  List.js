class List {
    constructor(){
       this.list = [];
       this.size = this.list.length;
    }

    add(input){
        this.list.push(Number(input));
        this.list.sort((a,b) => a - b);
        this.size = this.list.length;

    }

    remove(index){
      if (index < 0 || index > this.size) {
        throw new Error('Index is out of range');
      }
      
      this.list.splice(index,1);
      this.size = this.list.length;
      this.list.sort((a,b) => a - b);
      return this.list;
      
    }

    get(index){
        if (index < 0 || index > this.size) {
            throw new Error('Index is out of range');
        }
          
        this.size = this.list.length;
        this.list.sort((a,b) => a - b);
        return this.list[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
