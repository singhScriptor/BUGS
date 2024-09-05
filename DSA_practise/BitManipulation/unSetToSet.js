function UnsetBits(num){
    let len=num.toString(2).length
    return (1<<len)-1
    
}
let n=5
console.log(UnsetBits(n))