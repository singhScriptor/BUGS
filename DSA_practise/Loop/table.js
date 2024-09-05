function printTable(){
    for(let i=2;i<=4;i++){
        let ans=''
        for(let j=1;j<=10;j++){
            ans+=i*j+' '
        }
        console.log(ans)
    }
}
printTable()