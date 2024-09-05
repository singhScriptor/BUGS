function runningSum(nums){
    let sum=0
    let ans=[]
    for(let i=0; i<nums.length; i++){
        sum+=nums[i]
        ans.push(sum)
    }
    return ans 
}
let nums=[1,2,3,4]
console.log(runningSum(nums))


//2nd method
function runSum1D(arr){
    for(let i=1;i<nums.length;i++){
        arr[i]+=arr[i-1]
    }
    return arr
}
let arr=[1,2,3,4]
console.log(runSum1D(arr))