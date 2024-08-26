function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1
        while(j>=0 && temp>=arr[j]){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp 
    }
    return arr 
}
let arr=[4,3,2,5,1]
console.log(insertionSort(arr))