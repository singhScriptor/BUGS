function findLeader(nums){
    let arr=[]
    let maxi=0
    for(let i=nums.length;i>=0;i--){
        if(nums[i]>maxi){
            arr.unshift(nums[i])
            maxi=nums[i]
        }
    }
    //console.log(arr)
    return arr

}
let arr=[16,17,4,3,5,2]
console.log(findLeader(arr))