function deleteNode(node){
    node.val=node.next.val
    node.next=node.next.next
}
let head=[4,5,1,9]
let node=5
console.log(deleteNode(node))