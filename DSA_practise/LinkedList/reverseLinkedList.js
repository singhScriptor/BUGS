function reverseLinkedList(head){
    let temp=head
    let prev=null,next=null;
    while(temp){
        next=temp.next
        temp.next=prev
        prev=temp
        temp=next
    }
    return prev
}
let head=[1,2,3,4,5]
console.log(reverseLinkedList(head))