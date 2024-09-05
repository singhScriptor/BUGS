function upperBound(nums,target){
    let left=1
    let right=nums.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(nums[mid]>target){
            right=mid-1

        }
        else{
            left=mid+1
        }
    }
    return left
}
let arr=[1,2,3,3,5,6,8],target=3
console.log(upperBound(arr,target))
