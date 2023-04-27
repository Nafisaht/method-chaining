class Arithmetic{
    constructor(initNumber){
        this.number = initNumber;
    }

    add(value){
        this.number += value;
        return this;
    }

    subtract(value){
        this.number -= value;
        return this;
    }

    divide(value){
        this.number /= value;
        return this;
    }

    multiply(value){
        this.number *= value;
        return this;
    }

    getResult(){
        return this.number;
    }
}

