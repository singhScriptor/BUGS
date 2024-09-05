function isPermutation(s,t){
    if(s.length !== t.length)return false
    let char={}
    for(let i of s){
        char[i]=(char[i]||0)+1
    }
    for(let i of t){
        if(!char[i]){
            return false
        }
    }
    return true
}
let a="dlwor"
let b='world'
console.log(isPermutation(a,b))

//2nd method
function Permutation(s,t){
    if(s.length!==t.length)return false
    let a=s.split('').sort().join('')
    let b=t.split('').sort().join('')
    return a===b
}
let c='dlwor'
let d='world'
console.log(Permutation(c,d))