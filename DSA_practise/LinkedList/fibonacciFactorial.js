function fibonacciFactorial(n){
    if(n<=1)return n
    return fibonacciFactorial(n-1)+fibonacciFactorial(n-2)
}
let n=3
console.log(fibonacciFactorial(n))