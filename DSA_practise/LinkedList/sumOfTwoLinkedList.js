function sumOfTwoLinkedList(l1,l2){
    let newNode=new ListNode(0)
    let ans=0
    let temp=newNode
    while(l1 || l2 || ans){
        if(l1){
            ans+=l1.val
            l1=l1.next
        }
        if(l2){
            ans+=l2.val
            l2=l2.next
        }
        temp.next=new ListNode(ans%10)
        temp=temp.next
        ans=Math.floor(ans/10)
    }
    return newNode.next
}