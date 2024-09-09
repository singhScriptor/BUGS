class stack{
    constructor(){
        this.stack = [];
    }
    PUSH(x){
        this.stack.push(x)
    }
    POP(){
        if(!this.isEmpty()){
            return this.stack.pop()
        }
        return -1
    }
    TOP(){
        if(!this.isEmpty()){
            return this.stack[this.stack.length-1]
        }
        else{
            return -1
        }
    }
    isEmpty(){
        return this.stack.length == 0
    }
}
let s=new stack([],4);
s.PUSH(1);
s.PUSH(2);
s.PUSH(3);
s.PUSH(4);
console.log(s.TOP())
console.log(s.POP())
console.log(s.isEmpty())