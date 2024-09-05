function similarArray(a,b){
    if(a.length !== b.length)return false
    for(let i=0;i<a.length;i++){
        if(a[i]!==b[i]){

            return false
        }
    }
    return true
}
let a=[3,7,2,8,6]
let b=[3,7,2,8,6]

console.log(similarArray(a,b))