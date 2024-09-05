function altBits(nums,k){
    // let ans=1<<k;
    // return nums|ans

    let power=Math.pow(2,k)
    if((nums & power)=== 0){
        nums+=power


    }
    return nums
}
let n=5
let k=1
console.log(altBits(n,k))