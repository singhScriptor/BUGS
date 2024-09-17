class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class MergeList{
    constructor(head=null){
        this.head = head;
    }
    print(){
        let temp=this.head
        while(temp){
            console.log(temp.val)
            temp=temp.next
        }
    }
    AtBeginning(val){
        let NewNode=new Node(val);
        if(this.head===null){
            this.head=new Node
        }
        else{
            NewNode.next=this.head
            this.head=new Node
        }

    }
    AtEnd(val){
        let newNode=new Node(val)
        if(this.head===null){
            this.head=newNode
        }
        else{
            let temp=this.head
            while(temp.next !== null){
                temp=temp.next
            }
            temp.next=newNode
        }
    }
    sort(val){
        if(this.head===null || this.head.val===null ){
            return 
        }
        let swapped
        do{
            swapped=false
            let temp=this.head
            while(temp.next !== null){
                if(temp.data>temp.next.data){
                    let sorted=temp.val
                    temp.val=temp.next.val
                    temp.next.val=sorted
                    swapped=true
                }
                temp=temp.next
            }
        }
        while(swapped);
    }
    MergeList(l1,l2){
        let newNode=new Node (0)
        let temp=newNode
        while(l1 !== null && l2 !== null){
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
        if(l1 !==null){
            temp.next=l1
        }
        else{
            temp.next=l2
        }
        this.head=newNode.next
    }


}
