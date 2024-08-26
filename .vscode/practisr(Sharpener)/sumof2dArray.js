function sumOf2dAr(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            sum+=arr[i][j]
        }
    }
    return sum
    
}
let arr=[[1,2,3],[4,5,7,8]]
console.log(sumOf2dAr(arr))