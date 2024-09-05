function removeDup(s){
    let ans=''
    for(let i of s){
        if(!ans.includes(i)){
            ans+=i
        }
    }
    return ans
}
let s="programming"
console.log(removeDup(s))