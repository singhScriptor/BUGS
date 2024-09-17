function removeNthNode(head,k){
    while(head && head.val===k)head=head.next
    let temp=head
    if(!temp)return null
    let prev=null
    while(temp){
        if(temp.val===k){
            prev.next=temp.next
        }
        else{
            prev=temp
        }
        temp=temp.next
    }
    return head
}