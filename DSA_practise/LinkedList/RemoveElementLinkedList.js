function removeLinkedList(head,val){
    while(head && head.val===val){
        head=head.next
    }
    if(!head){
        return null
    }
    let temp=head
    let prev=null
    while(temp){
        if(temp.val===val){
            prev.next=temp.next
        }
        else{
            prev=temp
        }
        temp=temp.next
    }
    return head
}
let head = [1,2,6,3,4,5,6], val = 6
console.log(removeLinkedList(head,val))