function hamminghWeight(n){
    n=n.toString()
    let count=0
    for(let i=0;i<n.length;i++){
        if(n[i]==='1'){
            count++
        }
    }
    return count

}
let n=1011
console.log(hamminghWeight(n))