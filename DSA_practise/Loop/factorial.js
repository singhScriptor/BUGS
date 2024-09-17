function factorial(n){
    let sum=1
    for(let i=1; i<=n;i++){
        sum*=i
    }
    return sum
}
let n=8
console.log(factorial(n))

//2nd method using recursion
function factoRial(n){
    if(n===0)return 1
    return n*factoRial(n-1)
}
let m=8
console.log(factoRial(m))

