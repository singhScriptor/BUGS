class Node{
    constructor(data){
        this.data = data;
        this.next=null
    }

}
class ListNode{
    constructor(head=null){
        this.head = head;
    }
    printNodes(){
        let temp=this.head
        while(temp){
            console.log(temp.data)
            temp=temp.next
        }
    }
    addNodeAtEnd(data){
        let newNode=new Node(data)
        if(this.head===null){
            this.head=newNode
        }
        else{
            let temp=this.head
            while(temp.next!==null){
                temp=temp.next
            }
            temp.next=newNode
        }
    }
      
}
let list=new ListNode()
list.addNodeAtEnd(12)
list.addNodeAtEnd(13)
list.addNodeAtEnd(14)
list.printNodes()