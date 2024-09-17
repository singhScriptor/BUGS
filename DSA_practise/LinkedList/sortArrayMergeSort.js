function mergeSort(nums){
    if(nums.length<=1)return nums
    let mergeIndex=Math.floor(Math.random()*nums.length);
    let merge=nums[mergeIndex];
    let mid=[]
    let left=[]
    let right=[]
    for(let i of nums){
        if(i<merge){
            left.push(i)
        }
        else if(i>merge){
            right.push(i)
        }
        else{
            mid.push(i)
        }
    }
    return mergeSort(left).concat(mid,mergeSort(right))

}
let nums = [5,2,3,1]
console.log(mergeSort(nums))