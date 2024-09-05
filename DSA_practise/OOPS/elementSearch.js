function findIndex(nums,target){
    let index1=-1
    let index2=-1
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            if(index1===-1)index1=i
            index2=i

        }
        else if(nums[i]>target){
            break
        }
    }
    return [index1,index2]

}
let nums = [5,7,7,8,8,10], target = 8
console.log(findIndex(nums,target))