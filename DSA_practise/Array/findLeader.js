function findLeaders(arr){
    let jrr=[]
    let leader=arr[arr.length-1]
    jrr.push(leader)
    for(let i=arr.length-1;i>0;i--){
        if(arr[i]>leader){
            jrr.unshift(arr[i])
            leader=arr[i]
        }
    }
    return jrr
}
let arr=[16,17,4,3,5,2]
console.log(findLeaders(arr))