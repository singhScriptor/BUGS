class Queue{
    constructor(){
        this.queue = [];
    }
    Push(x){
        this.queue.push(x);
    }
    Pop(){
        if(!this.empty()){
            return this.queue.shift()
        }
        return -1
    }
    Peek(){
        if(!this.empty()){
            return this.queue[0]
        }
        return -1
    }
    empty(){
        return this.queue.length == 0
    }
}
let q=new Queue([],4)
q.Push(1)
q.Push(2)
q.Push(3)
q.Push(4)
console.log(q.Pop())
console.log(q.Peek())
console.log(q.empty())