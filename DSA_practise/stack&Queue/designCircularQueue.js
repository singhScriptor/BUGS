class Queue{
    constructor(que=[],k=0){
        this.que = que;
        this.k = k;
    }
    enqueue(value){
        if(!this.isFull()){
            this.que.push(value)
            return true
        }
        return false
    }
    dequeue(){
        if(!this.isEmpty()){
            this.que.shift()
            return true
        }
        return false
    }
    front(){
        if(!this.isEmpty()){
            return this.que[0]
        }
        return -1
    }
    Rear(){
        if(!this.isEmpty()){
            return this.que[this.que.length-1]
        }
        return -1
    }
    isEmpty(){
        return this.que.length==0
    }
    isFull(){
        return this.que.length===this.k
    }
}
let q=new Queue([],3)
console.log(q.enqueue(12))
console.log(q.enqueue(13))
console.log(q.enqueue(14))
console.log(q.enqueue(15))
console.log(q.dequeue())
console.log(q.Rear())
console.log(q.front())
console.log(q.isFull())
console.log(q.isEmpty())
