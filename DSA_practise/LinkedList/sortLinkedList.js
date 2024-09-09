class ListNode{
    constructor(data){
        this.data = data;
        this.next=null
    }

}
class sortedList{
    constructor(head){
        this.head=head;
    }
    insert(data){
        let newNode=new ListNode(data);
        if(!this.head || this.head.data>=data){
            newNode.next=this.head
            this.head=newNode
        }
        else{
            let temp=this.head
            while(temp.next && temp.next.data<data){
                temp=temp.next
            }
            newNode.next=temp.next
            temp.next=newNode
        }
        
    }
    printLinkedList(){
        let temp=this.head
        while(temp){
            console.log(temp.data)
            temp=temp.next
        }
    }
}
let l1=new sortedList()
l1.insert(5)
l1.insert(3)
l1.insert(9)
l1.insert(1)
l1.printLinkedList()
let l2=new sortedList()
l2.insert(8)
l2.insert(2)
l2.printLinkedList()

