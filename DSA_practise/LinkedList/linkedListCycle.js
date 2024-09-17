function linkedListCycle(head){
    if(!head || !head.next){
        return null
    }
    let slow=head
    let fast=head
    let ans=false
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
        if(slow === fast){
            ans=true
            break
        }
    }
    if(!ans)return false
    slow=head
    while(slow !== fast){
        slow=slow.next
        fast=fast.next
    }
    return slow
}
let head = [3,2,0,-4], pos = 1
console.log(linkedListCycle(head))