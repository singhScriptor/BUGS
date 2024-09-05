function richestCustomer(accounts){
    let maxi=0
    for(let i=0;i<accounts.length;i++){
        let total=accounts[i].reduce((a,b)=>a+b,0)
        if(total>maxi){
            maxi=total
        }
    }
    return maxi
}
let accounts=[[1,2,3],[3,2,1]]
console.log(richestCustomer(accounts))