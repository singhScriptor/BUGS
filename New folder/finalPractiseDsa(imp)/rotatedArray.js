function rotatedArray(nums,k){
    if(nums.length===0)return nums
    k=k%nums.length-1
    if(k===0)return nums
    let ans=[...nums.slice(-k), ...nums.slice(0,-k)]
    nums.length=0
    nums.push(ans)
    return ans

}
let nums=[1,2,3,4,5,6,7]
let k=3
console.log(rotatedArray(nums,k))