class Node{
    constructor(data){
        this.data=data
        this.next=null

    }
}
class LinkedList{
    constructor(){
        this.head=null
    }
    printLinkedList(){
        let temp=this.head
        while(temp){
            console.log(temp)
            temp=temp.next
        }
    }
    insertAtBeginning(data){
        const temp=new Node(data)
        if(this.head===null){
            this.head=temp
        }
        else{
            this.head.next=this.head
            this.head=temp
        }
    }
}
