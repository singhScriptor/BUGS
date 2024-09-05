function longestSubaArray(nums){
    let left=0
    let maxi=0
    let arr={}
    for(let right=0;right<nums.length;right++){
        if(nums[right] in arr && arr[nums[right]]>=left){
            left=arr[nums[right]]+1
        }
        arr[nums[right]]=right
        maxi=Math.max(maxi,right-left+1)
    }
    return maxi

    

}
let arr=[1,2,3,1,2,3,4,5]
console.log(longestSubaArray(arr))