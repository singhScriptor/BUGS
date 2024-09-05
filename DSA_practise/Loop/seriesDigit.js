function printSeries(n){
    for(let i=1;i<=n;i++){
        let series=''
        for(let j=1;j<i+1;j++){
            series+=j
        }
        console.log(series)
    }
}
let n=4
printSeries(n)