function printSeries(n){
    let i=1
    while(i<n){
        if(i*i<=n){
            console.log(i*i)
        }
        i++
    }
}
let n=69
printSeries(n)