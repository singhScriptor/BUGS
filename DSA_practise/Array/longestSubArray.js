function longestSubarray(arr){
    let count=0
    let maxi=0
    for(let i=0; i<arr.length;i++){
        if(arr[i]===arr[i-1]+1){
            count++
            maxi=Math.max(maxi,count)
        }
        else{
            count=1
        }
    }
    return maxi
}
let arr=[1,2,3,1,2,3,4,5]
console.log(longestSubarray(arr))