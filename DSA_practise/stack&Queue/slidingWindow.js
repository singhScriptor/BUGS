function slidingWIndowMaxi(nums,k){
    let stack=[]
    let ans=[]
    for(let i =0;i<nums.length;i++){
        if(stack.length>0 && stack[0]<i-k+1){
            stack.shift()
        }
        while(stack.length>0 && nums[stack[stack.length-1]]<nums[i]){
            stack.pop()

        }
        stack.push(i)
        if(i>=k-1){
            ans.push(nums[stack[0]])
        }
    }
    return ans
}
let nums=[1,3,-1,-3,5,3,6,7], k = 3
console.log(slidingWIndowMaxi(nums,k))
