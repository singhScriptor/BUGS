function removeDup(nums){
    if(nums.length<=2){
        return nums.length
    }
    let slow=2
    for(let fast=2;fast<nums.length;fast++){
        if(nums[fast] !== nums[slow-2]){
            nums[slow]=nums[fast]
            slow++
        }
    }
    return slow
}
let ums=[1,1,1,2,2,3,3,3,4,4,4]
console.log(removeDup(ums))