function sumOfOddSubArray(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        let total=0
        for(let j=i;j<arr.length;j++){
            total+=arr[j]
            if((j-i)%2 ===0){
                sum+=total
            }
        }
    }
    return sum
}
let arr=[1,4,2,5,3]
console.log(sumOfOddSubArray(arr))