function removeDuplicate(string){
    let ans=''
    let set={}
    for(let i of string){
        if(!(i in set)){
            set[i]=true
            ans+=i
        }
    }
    return ans

}
let s='programming'
console.log(removeDuplicate(s))
