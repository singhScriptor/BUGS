class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class LinkedNode{
    constructor(head){
        this.head=head
    }
    printAttributes(){
        let temp=this.head
        while(temp){
            console.log(temp.data)
            temp=temp.next
        }
    }
}
let l1=new Node(12)
let l2=new Node(14)
let l4=new Node(16)
let l5=new Node(19)

l1.next=l2 
l2.next=l4
l4.next=l5

let ans=new LinkedNode(l1)
ans.printAttributes()