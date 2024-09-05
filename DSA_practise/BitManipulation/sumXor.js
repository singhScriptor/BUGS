function sumOfXor(n,arr){
    let sum=0
    for(let i=0;i<n;i++){
      sum+=(n-(i+1)^arr[i])
    }
    return sum
  }
  let n=5
  let arr=[1,2,3,4,5]
  console.log(sumOfXor(n,arr))