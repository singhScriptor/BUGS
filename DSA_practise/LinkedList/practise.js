class Node{
    constructor(val){
        this.val = val;
        this.next=null
    }
}
class ListNode{
    constructor(head){
        this.head = head;
    }
    print(){
        let temp=this.head
        while(temp){
            console.log(temp)
            temp=temp.next
        }
    }
    insertAtBeginning(val){
        let newNode=new Node(val)
        newNode.next=this.head
        this.head=newNode
    }
    insertAtEnding(val){
        let newNode=new Node(val)
        if(!this.head){
            this.head=newNode
        }
        else{
            let temp=this.head
            while(temp.next){
                temp=temp.next
            }
            temp.next=newNode
        }
    }
    insertAtMiddle(val){
        let newNode=new Node(val)
        if(!this.head){
            return newNode
        }
        let temp=this.head
        let len=0
        while(temp){
            len++
            temp=temp.next
        }
        let mid=Math.floor(len/2)
        temp=this.head
        for(let i=1;i<mid;i++){
            temp=temp.next
        }
        newNode.next=temp.next
        temp.next=newNode
        return this.head
    }
    removeDuplicates(){
        let temp=this.head
        while(temp && temp.next){
            if(temp.val === temp.next.val){
                temp.next=temp.next.next
            }
            else{
                temp=temp.next
            }
        }
        return this.head
    }
    mergeSorted(l1,l2){
        let newNode=new Node(0)
        let temp=newNode
        while(l1 && l2){
            if(l1.val<l2.val){
                temp.next=l1 
                l1=l1.next
            }
            else{
                temp.next=l2 
                l2=l2.next
            }
            temp=temp.next
        }
        if(l1)temp.next=l1 
        if(l2)temp.next=l2 
        return newNode.next
    }
    moveToStart(){
        let temp=this.head
        let prev=null
        while(temp.next){
            prev=temp
            temp=temp.next
        }
        if(prev){
            prev.next=null
            temp.next=this.head
            this.head=temp
        }

    }
    
}