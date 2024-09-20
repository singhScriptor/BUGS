function longestPalindrome(s){
    let set={}
    let ans=0
    for(let i of s){
        if(i in set){
            set[i]++
        }
        else{
            set[i]=1
        }
        if(set[i]%2===0)ans+=2
    }
    if(s.length>ans)return ans+1 
    return ans
}
let s="abcccccdd"
console.log(longestPalindrome(s))