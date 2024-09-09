class Node{
    constructor(data){
        this.data=data
        this.next=null
    }

}
class linkedNode{
    constructor(head=null){
        this.head=head
    }
    print(){
        let temp=this.head
        while(temp){
            console.log(temp.data)
            temp=temp.next
        }
    }
    atBeginning(data){
        let newNode=new Node(data)
        if(this.head===null){
            this.head=newNode
        }
        else{
            newNode.next=this.head
            this.head=newNode
        }
    }
    atEnd(data){
        let newNode=new Node(data)
        if(this.head===null){
            this.head=newNode
            return
        }
        let temp=this.head
        while(temp.next !== null){
            temp=temp.next
        }
        temp.next=newNode

    }
    sortNode(data){
        if(this.head===null || this.head.next ===null){
            return 
        }
        let swapped;
        do{
            swapped=false
            let temp=this.head
            while(temp.next !== null){
                if(temp.data>temp.next.data){
                    let sort=temp.data
                    temp.data=temp.next.data
                    temp.next.data=sort
                    swapped=true
                }
                temp=temp.next
            }
        }
        while(swapped);
    }
    mergeLists(l1,l2){
        let newNode=new Node(0)
        let temp=newNode
        while(l1 !==null && l2!==null){
            if(l1.data<l2.data){
                temp.next=l1
                l1=l1.next
            }
            else{
                temp.next=l2
                l2=l2.next
            }
            temp=temp.next
        }
        if(l1!==null){
            temp.next=l1
        }
        else{
            temp.next=l2
        }
        this.head=newNode.next

    }



}
let l1=new linkedNode()
l1.atBeginning(2)
l1.atBeginning(14)
l1.atEnd(2)
l1.atEnd(19)
l1.sortNode()
l1.print()
let l2=new linkedNode()
l2.atBeginning(13)
l2.atBeginning(14)
l2.atBeginning(17)
l2.atEnd(187)
l2.atEnd(0)
l2.atEnd(1)
l2.sortNode()
l2.print()