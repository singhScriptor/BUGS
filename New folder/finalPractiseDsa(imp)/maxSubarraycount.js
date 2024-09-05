function countOnes(arr){
    let left=0
    let maxi=0
    let jrr=new Array(10).fill(-1)
    for(let right=0;right<arr.length;right++){
        if(jrr[arr[right]]>=left){
            left=jrr[arr[right]]+1
        }
        jrr[arr[right]]=right
        maxi=Math.max(maxi,right-left+1)
    }
    return maxi
}
let arr=[1,2,3,1,2,3,4,5]
//let k=2
console.log(countOnes(arr))