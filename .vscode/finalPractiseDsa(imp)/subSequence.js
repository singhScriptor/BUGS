function isSubSeqEnce(s,t){
    if(s.length>t.length)return false
    let ans=0
    for(let i=0;i<t.length;i++){
        if(s[ans]===t[i])ans++
    }
    return ans===s.length
}
let s="abc"
let t="ahbgdc"
console.log(isSubSeqEnce(s,t))