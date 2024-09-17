function rotatedList(head,k){
    if(!head || !head.next || k === 0)return head
    let temp=head
    let length=1
    while(temp.next){
        temp=temp.next
        length++
    }
    temp.next=head
    k=length-(k%length)
    while(k>0){
        temp=temp.next
        k--
    }
    head=temp.next
    temp.next=null
    return head
}
let head=[1,2,3,4,5],k=2
console.log(rotatedList(head,k))