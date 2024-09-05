function printSeries(n,m){
    i=1
    while(i<=n){
        if(i===m){
            break
        }
        console.log(i)
        i++
    }
}
let n=10
let m=4
printSeries(n,m)

function printNum(d,c){
    for(let i=1;i<=d;i++){
        if(i===c){
            break
        }
        console.log(i)
    }
}
let d=20
let c=10
printNum(d,c)