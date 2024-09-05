// function isPrime(n){
//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }
// function sumOfPrime(n){
//     let sum=0
//     for(let i=2;i<n;i++){
//         if(isPrime(i)){
//             sum+=i
//         }
//     }
//     return sum
// }
// let n=10
// console.log(sumOfPrime(n))

function sumOfPrime(n){
    let isPrime=new Array(n+1).fill(true)
    isPrime[0]=isPrime[1]=true
    for(let i=2;i*i<=n;i++){
        if(isPrime[i]){
            for(let j=i*i;j<=n;j+=i){
                isPrime[j]=false
                
            }
        }
    }
    let sum=0
    for(let i=2;i<=n;i++){
        if(isPrime[i]){
            sum+=i
        }

    }
    return sum
}
let n=10
console.log(sumOfPrime(n))