function sortArray(arr){
    for(let i=0;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1
        while(j>=0 && temp<arr[j]){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    return arr
}
let arr=[2,0,2,1,1,0]
console.log(sortArray(arr))

//2nd method
function sortArray(arr){
    for(let i=0;i<arr.length;i++){
        let temp=i
        for(let j=i;j<arr.length;j++){
            if(arr[j]>=arr[temp]){
                temp=j
            }
        }
        let tem=arr[i]
        arr[i]=arr[temp]
        arr[temp]=tem

    }
    return arr
}
let rr=[3,5,2,4,1]
console.log(sortArray(rr))
