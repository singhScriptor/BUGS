function luckyInteger(arr){
    let maxi=-1
    let set=new Set(arr)
    for(let i of set){
        let ans=arr.filter(num=>num===i).length
        if(i===ans){
            maxi=Math.max(maxi,i)
        }
    }
    return maxi
}
let arr=[2,2,3,4]
console.log(luckyInteger(arr))