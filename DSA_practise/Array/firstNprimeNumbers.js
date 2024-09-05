function printNPrime(n){
    let count=0
    let x=2
    let arr=[]
    while(arr.length<n){
        let flag=true
        for(let i=2;i<x;i++){
            if(x%i===0){
                flag=false
                break
            }
        }
        if(flag===true){
            arr.push(x)
            count++
        }
        if(count===n){
            break
        }
        x++
    }
    return arr
}
let n=5
console.log(printNPrime(n))