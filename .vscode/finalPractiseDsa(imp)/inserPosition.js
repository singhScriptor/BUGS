function insertPosition(arr,target){
    let l=0
    let h=arr.length
    while(l<=h){
        let mid=Math.floor((l+h)/2)
        if(arr[mid]===target){
            return mid

        }
        else if(arr[mid]<target){
            l=mid+1
        }
        else{
            h=mid-1
        }
    }
    return l
}
let arr=[1,3,5,6]
let target=2
console.log(insertPosition(arr,target))