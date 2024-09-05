function numberpattern(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let digit=''
            for(let k=i;k<j+1;k++){
                digit+=arr[k]
            }
            console.log(digit)
        }
    }
}
let arr=[1,2,3,4,5]
numberpattern(arr)