function fibonacciSeries(n){
    let a=0
    let b=1
    for(let i=1;i<n;i++){
        let temp=a+b 
        a=b
        b=temp
    }
    return a
}
let n=9
console.log(fibonacciSeries(n))