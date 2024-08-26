function validatePalindrome(s){
    s=s.toLowerCase().replace(/[^a-z0-9]/g,'')
    for(let i=0;i<=s.length/2;i++){
        if(s[i]!==s[s.length-1-i]){
            return false
        }
    }
    return true
}
let s="A man, a plan, a canal: Panama"
console.log(validatePalindrome(s))