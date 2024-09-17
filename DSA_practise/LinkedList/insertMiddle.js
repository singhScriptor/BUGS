function insertMiddle(head,k){
    let newNode=ListNode(k)
    if(!head)return newNode
    let len=1,temp=head
    while(temp){
        len++
        temp=temp.next
    }
    let mid=Math.floor(len/2)
    temp=head
    for(let i=1;i<mid;i++){
        temp=temp.next
    }
    newNode.next=temp.next
    temp.next=newNode
    return head
}