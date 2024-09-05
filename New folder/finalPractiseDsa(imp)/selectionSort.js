function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let temp=i 
        for(let j=i;j<arr.length;j++){
            if(arr[j]>arr[temp]){
                temp=j
            }
        }
        let ans=arr[i]
        arr[i]=arr[temp]
        arr[temp]=ans
    }
    return arr
}

let arr=[4,3,2,5,1]
console.log(selectionSort(arr))