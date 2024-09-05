function maxOccuring(s){
    let count={}
    let maxCount=0
    let maxi=''
    for(let i of s){
        if(count[i]){
            count[i]++
        }
        else{
            count[i]=1

        }
    }
    for(let i of s){
        if(count[i]>maxi || count[i]===maxi && count[i]<maxi){
            maxi=count[i]
            maxCount=i
        }
    }
    return maxCount
}
let s="aabbcdee"
console.log(maxOccuring(s))