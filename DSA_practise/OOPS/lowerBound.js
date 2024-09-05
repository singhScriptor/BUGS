function lowerBound(arr,target){
    let left=0
    let right=arr.length-1
    while(left<right){
        let mid=Math.floor(left+right)/2
        if(arr[mid]<target){
            left=mid+1
        }
        else{
            
            right=mid-1
        }
    }
    return left
}
let arr=[1,2,3,3,5,6,8]
let target=3
console.log(lowerBound(arr,target))