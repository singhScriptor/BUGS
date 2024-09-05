function series(n){
    let i=1
    while(i<=n){
        if(i*i*i<=n){
            console.log(i*i*i)
        }
        i++
    }
}
let n=125
series(n)