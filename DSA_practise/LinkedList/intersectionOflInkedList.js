function getInterSectionNode(headA,headB){
    if(!headA || !headB)return null
    let tempA=headA
    let tempB=headB
    while(tempA !== tempB){
        if(tempA===null){
            tempA=headB
        }
        else{
            tempA=tempA.next

        }
        if(tempB===null){
            tempB=headA
        }
        else{
            tempB=tempB.next
        }


    }
    return tempA
}
let listA = [4,1,8,4,5],listB=[5,6,1,8,4,5]