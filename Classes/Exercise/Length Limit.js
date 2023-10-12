class Stringer{
    constructor(string, length){
        this.innerString = string;
        this.innerLength = Number(length);
    }

    increase(number){
        this.innerLength += number;
    }

    decrease(number){
        if (this.innerLength - number < 0) {

            this.innerLength = 0;
        }else{

            this.innerLength -= number;
        }
    }

    toString(){
        return this.innerLength >= this.innerString.length
            ? this.innerString
            : this.innerString.slice(0, this.innerLength) + '...';
    }
}