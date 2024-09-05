function sumofMultiple(n,x){
    let sum=0
    for(let i=0;i<=n;i++){
        if(i%x===0){
            sum+=i
        }
    }
    return sum
}
let n=20
let x=4
console.log(sumofMultiple(n,x))