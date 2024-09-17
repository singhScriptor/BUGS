function checkPalindrome(head){
    let arr=[]
    while(head!==null){
        arr.push(head)
        head=head.next

    }
    for(let i=0;i<arr.length/2;i++){
        if(arr[i]!==arr[arr.length-1-i]){
            return false
        }
    }
    return true
}
let head=[1,2,2,1]
console.log(checkPalindrome(head))