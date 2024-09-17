function subSequence(arr,temp=[],i=0){
    for(let j=i;j<arr.length;j++){
        temp.push(arr[j]);
        console.log(temp);
        subSequence(arr,temp,j+1)
        temp.pop()
    } 

}
let arr=[1,2,3]
subSequence(arr)