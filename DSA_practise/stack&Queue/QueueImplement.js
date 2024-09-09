class Queue{
    constructor(que=[]){
        this.que = que;
    }
    Enqueue(num){
        return this.que.push(num)
    }
    Dequeue(num){
        if(this.isEmpty()){
            return "Queue is Empty"
        }
        return this.que.shift(num)
    }
    isEmpty(){
        return this.que.length===0
    }
    firstElement(){
        return this.que[0]
    }
}
let q=new Queue()
q.Enqueue(10)
q.Enqueue(23)
q.Enqueue(34)
q.Enqueue(14)
console.log(q.Enqueue())
console.log(q.Dequeue())
console.log(q.isEmpty())
console.log(q.firstElement())