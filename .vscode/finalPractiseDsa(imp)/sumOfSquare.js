function sumOfSquare(a){
    let sum=0
    for(let i=1;i<=a;i++){
        sum+=i*i

    }
    return sum

}
let n=5
console.log(sumOfSquare(n))

//sqaure of number
function sqaure(n){
    let sq=0
    for(let i=1;i<=n;i++){
        sq=i*i
    }
    return sq
}
let p=6
console.log(sqaure(p))

//check it is sum of sqaure by adding two numbers
function sumOfSq(N){
    let l=0
    let h=Math.floor(Math.sqrt(N))
    while(l<=h){
        let sum=l*l+h*h
        if(sum===N){
            return true
        }
        else if(sum<=N){
            l++
        }
        else{
            h--
        }
    }
    return false

}
let j=8
console.log(sumOfSq(j))


