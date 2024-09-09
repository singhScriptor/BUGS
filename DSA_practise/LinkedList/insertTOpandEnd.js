class Node{
    constructor(data){
        this.data = data;
        this.next=null
    }
}
class ListNode{
    constructor(head=null){
        this.head=head 
    }
    printNodes(){
        let temp=this.head
        while(temp){
            console.log(temp.data)
            temp=temp.next
        }
    }
    addNodeatBeginning(data){
        let newNode=new Node(data)
        newNode.next=this.head
        this.head=newNode
    }
    addAtEnding(data){
        let newData=new Node(data)
        if(this.head===null){
            this.head=newData
        }
        else{
            let temp=this.head
            while(temp.next !==null){
                temp=temp.next
            }
            temp.next=newData
        }
    }

}
let l=new ListNode()
l.addNodeatBeginning(23)
l.addNodeatBeginning(0)
l.addNodeatBeginning(1)
l.addNodeatBeginning(2)
l.printNodes()
l.addAtEnding(43)
l.printNodes()