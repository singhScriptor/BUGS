function moveToStart(head){
    if(!head || !head.next)return head
    let temp=head
    let prev=null
    while(temp.next){
        prev=temp 
        temp=temp.next
    }
    if(prev){
        prev.next=null 
        temp.next=head
        head=temp
    }
    return head

}