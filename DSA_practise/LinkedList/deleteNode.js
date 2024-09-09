class Node{
    constructor(data){
        this.data = data;
        this.next=null;
    }
}
class listNode{
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
    addNodeBeginning(data){
        let newNode=new Node(data)
        newNode.next=this.head
        this.head=newNode
    }
    addNodeEnd(data){
        let newhead=new Node(data)
        if(this.head===null){
            this.head=newhead
        }
        else{
            let temp=this.head
            while(temp.next !== null){
                temp=temp.next
            }
            temp.next=newhead
        }
    }
    deleteNode(data){
        if(this.head===null){
            return 
        }
        if(this.head.data===data){
            this.head=this.head.next
            return
        }
        let temp=this.head
        while(temp !== null && temp.next.data===data){
            temp=temp.next
        }
        if(temp.next !==null){
            temp.next=temp.next.next
        }
    }

}
