function removeNodeFromENd(head,n){
    let temp=new ListNode(0)
    temp.next=head
    let first=temp
    let second=temp
    for(let i=0;i<=n;i++){
        first=first.next
    }
    while(first !== null){
        first=first.next
        second=second.next
    }
    second.next=second.next.next
    return temp.next
}