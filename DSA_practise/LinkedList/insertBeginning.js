class Node{
    constructor(data){
        this.data = data;
    }
}
class LinkedList{
    constructor(head){
        this.head = head;
    }
    printLinkedList(){
        let temp=this.head 
        while(temp){
            console.log(temp.data)
            temp=temp.next;
        }
    }
    insertAtBeginning(data){
        let newNode=new Node(data);
        newNode.next=this.head
        this.head=newNode;
    }
}
let l1=new LinkedList()
l1.insertAtBeginning(5)
l1.insertAtBeginning(7)
l1.insertAtBeginning(3)
l1.insertAtBeginning(9)
l1.printLinkedList()