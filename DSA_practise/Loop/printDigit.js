function printDigit(n){
    //let i=0
    while(n){
        let temp=n%10
        n=Math.floor(n/10)
        console.log(temp)
    }
}
let n=153
printDigit(n);

function printDigits(m){
    for(let i=0;i<n;i++){
        let temp=m%10
        m=Math.floor(m/10)
        console.log(temp)
    }
}
let m=352
printDigits(m);