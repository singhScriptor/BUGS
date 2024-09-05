function longestPalindrome(s){
    if(s.length===0)return 0
    let maxi=0
    function findMid(left,right){
        while(left>0 && right<s.length-1 && s[left]===s[right]){
            left--
            right++
        }
        return right-left-1
    }
    for(let i=0;i<s.length;i++){
        let left1=findMid(i,i)
        let right1=findMid(i,i+1)
        maxi=Math.max(maxi,left1,right1)
    }
    return maxi
}
let s="cbbd"
console.log(longestPalindrome(s))