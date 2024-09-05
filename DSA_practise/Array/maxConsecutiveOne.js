function maxiConsecutiveOnes(arr,k){
    let left=0
    let maxi=0
    let count=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            count++
        }
        while(count>k){
            if(arr[left]===0){
                count--
            }
            left++
        }
        maxi=Math.max(maxi,i-left+1)
    }
    return maxi
}
let arr=[1,1,0,0,0,1,1,0,1,1,1]
let k=2
console.log(maxiConsecutiveOnes(arr,k))