function boolean(n){
    n=n.toString(2)
    for(let i=0;i<n.length;i++){
        if(n[i]!=='1'){
            return false
        }
    }
    return true
}
let n=10
console.log(boolean(n))