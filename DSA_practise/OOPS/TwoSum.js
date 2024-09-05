function twoSum(nums,target){
    let set={}
    for(let i=0;i<nums.length;i++){
        let ans=target-nums[i]
        if(ans in set){
            return [set[ans],i]
        }
        set[nums[i]]=i
    }
    return []
}
let nums=[2,7,11,15]
let target=9
console.log(twoSum(nums,target))