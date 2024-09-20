function occursEvenTimes(arr){
    let ans=0
    for(let i=0;i<arr.length;i++){
        ans^=arr[i]
    }
    return ans
}
let arr=[4,3,4,6,2]
console.log(occursEvenTimes(arr))

//maxOccur
function occursEven(arr){
    let count=0,set={}
    for(let i of arr){
        if(i in set){
            set[i]++
        }
        else{
            set[i]=1
        }
        if(set[i]%2===0){
            count++
        }
    }
    return count
}