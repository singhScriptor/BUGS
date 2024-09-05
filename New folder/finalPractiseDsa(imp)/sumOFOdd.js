function sumOFoddSubArray(arr){
    let ans=0
    for(let i=0;i<arr.length;i++){
        let sum=0
        for(let j=i;j<arr.length;j++){
            sum+=arr[j]
            if((j-i)%2===0){
                ans+=sum
            }
        }
    }
    return ans
}
let arr=[10,11,12]
console.log(sumOFoddSubArray(arr))