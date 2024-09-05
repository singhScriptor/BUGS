function onesCount(nums,k){
    let left=0
    let count=0
    let maxi=0
    for(let right=0;right<nums.length;right++){
        if(nums[right]===0){
            count++
        }
        while(count>k){
            if(nums[left]===0){
                count--
            }
            left++
        }
        maxi=Math.max(maxi,right-left+1)
    }
    return maxi
}
let nums=[1, 1, 0, 0, 0, 1, 1 ,0 ,1 ,1 ,1]
let k=2
console.log(onesCount(nums,k))    