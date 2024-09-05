function missingNumber(arr){
    arr.sort((a, b) => a - b);
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== i){
            return i
        }
    }
    return -1
}
let arr=[9,6,4,2,3,5,7,0,1]
console.log(missingNumber(arr))