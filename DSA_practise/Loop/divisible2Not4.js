function divisible(n){
    let i=1
    while(i<=n){
        if(i%4===0){
            i++
            continue
        }
        else if(i%2===0){
            console.log(i)
        }
        i++
    }
}
let n=10
divisible(n)