function sortArr(arr){
    for(let i=0;i<arr.length;i++){
        let temp=i 
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[temp]){
                temp=j
            }
            let ans=arr[i]
            arr[i]=arr[temp]
            arr[temp]=ans   
        } 

    }
    return arr
}
let  arr=[2,0,2,1,1,0]
console.log(sortArr(arr))
