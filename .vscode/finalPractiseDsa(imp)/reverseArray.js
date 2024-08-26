function reverseArray(arr,length){
    let l=0
    let h=length-1
    while(l<=h){
        let temp=arr[l]
        arr[l]=arr[h]
        arr[h]=temp
        l++
        h--
    }
    return arr
}
let arr=[17,32,9,5,21,14]
let length=6 
console.log(reverseArray(arr,length))

//2nd method
function ReverseArray(arr){
    for(let i=0;i<arr.length/2;i++){
        let rev=arr[i]
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]=rev 

    }
    return arr
}
let ar=[1,2,3,4,5]
console.log(ReverseArray(ar))