function nextGreaterElement(nums){
    let ans=new Array(nums.length)
    for(let i=0;i<nums.length;i++){
        ans[i]=-1
        for(let j=1;j<nums.length;j++){
            let ind=(i+j)%nums.length
            if(nums[ind]>nums[i]){
                ans[i]=nums[ind]
                break
            }
        }
    }
    return ans

}
let nums=[1,2,1]
console.log(nextGreaterElement(nums))