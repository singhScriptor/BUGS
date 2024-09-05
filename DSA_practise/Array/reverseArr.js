function reverseArray(arr){
    for(let i=0;i<=Math.floor(arr.length/2);i++){
        let temp=arr[i]
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]=temp
    }
    return arr
}
let arr=[17,32,9,5,21,14]
console.log(reverseArray(arr))

function revArray(nums){
    let l=0
    let h=nums.length-1
    while(l<h){
        let temp=nums[l]
        nums[l]=nums[h]
        nums[h]=temp
        l++
        h--
    }
    return nums
}
let nums=[17,32,9,5,21,14]
console.log(revArray(nums))