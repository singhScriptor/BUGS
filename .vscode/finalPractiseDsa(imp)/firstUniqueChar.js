function firstUniqueCHar(n){
    let count={}
    for(let i of n){
        if(count[i]){
            count[i]++
        }
        else{
            count[i]=1
        }
    }
    for(let i=0;i<n.length;i++){
        if(count[n[i]]===1){
            return i
        }
    }
    return -1
}
let n="loveleetcode"
console.log(firstUniqueCHar(n))