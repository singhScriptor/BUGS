function findStart(head){
    if(!head || !head.next)return null
    let fast=head

    let slow=head
    while(fast && fast.next){
        fast=fast.next.next
        slow=slow.next
        if(fast === slow){
            slow=head
            while(fast !== slow){
            fast=fast.next
            slow=slow.next
            }
            return slow
        } 
    }
    return null
}