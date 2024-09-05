function countBits(n){
    let zero=0
    let one=0
    n=n.toString(2)
    for(let i=0;i<n.length;i++){
        if(n[i]==='0'){
            zero++
        }
        else{
            one++
        }
    }
    return [zero,one]
}
let n=10
console.log(countBits(n))