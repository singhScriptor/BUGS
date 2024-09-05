function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let temp=arr[i];
        let j=i-1
        while(j>=0 && temp<=arr[j])
        {
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    return arr
}
let arr=[3,5,1,4,2]
console.log(insertionSort(arr))