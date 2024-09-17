function detectCycle(head){
    if(!head && !head.next)return null
    let slow=head
    let fast=head
    let flag=false
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
    }
    if(!flag)return null
    slow=head
    while(slow !== fast){
        slow=slow.next
        fast=fast.next
    }
    return slow

}