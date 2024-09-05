function printSeries(n){
    for(let i=1;i<=n;i++){
        let digit=''
        for(let j=1;j<i*2;j++){
            digit+=i
        }
        console.log(digit)
    }
}
let n=5
printSeries(n)