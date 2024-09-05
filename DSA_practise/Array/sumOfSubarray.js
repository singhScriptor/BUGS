function sumOfsubArray(arr){
    let maxi=arr[0]
    for(let i=0;i<arr.length;i++){
        let sum=0
        for(let j=i;j<arr.length;j++){
            sum+=arr[j]
            maxi=Math.max(maxi,sum)
        }
    }
    return maxi
}
let arr=[5,2,-4,-5,3,-1,2,3,1]
console.log(sumOfsubArray(arr))