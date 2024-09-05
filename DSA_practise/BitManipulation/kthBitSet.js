function kthBitSet(n,k){
    n=n.toString(2)
    if(n[n.length-(k+1)]==='1')return true
    return false
    //return (n&(1<<(k-1)))!==0
}
let num=13
let k=2
console.log(kthBitSet(num,k))
