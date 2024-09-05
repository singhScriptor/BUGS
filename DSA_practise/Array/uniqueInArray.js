function findUnique(arr){
    arr.sort((a,b)=>a-b)
    for(let i=0;i<arr.length;i++){
        if(i===arr.length-1 && arr[i]!==arr[i+1]){
            return arr[i]
        }
    }
    return -1
}
let arr=[7,12,4,9,3,7,13,9,4,12,3]
console.log(findUnique(arr))