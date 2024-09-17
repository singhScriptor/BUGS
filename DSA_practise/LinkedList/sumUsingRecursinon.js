function sumRecusrion(n){
    if(n===1)return 1
    return n+sumRecusrion(n-1)

}
let n=5
console.log(sumRecusrion(n))