function findIndex(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}
let arr=[3,17,9,25,12,5,14,21]
let target=12
console.log(findIndex(arr,target))