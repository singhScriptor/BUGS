function UpperBound(nums,target){
    let l = 0;
    let j = nums.length;
    while (l <= j) {
        let mid = Math.floor((l + j) / 2);
        if (nums[mid] <= target) {
            l = mid + 1;
        } else {
            j = mid-1;
        }
    }
    return l;
}
let arr=[1,2,3,5,9]
let target=5
console.log(UpperBound(arr,target))