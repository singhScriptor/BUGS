function occursEvenTimes(arr){
    let ans=0
    for(let i=0;i<arr.length;i++){
        ans^=arr[i]
    }
    return ans
}
let arr=[4,3,4,3,2]
console.log(occursEvenTimes(arr))