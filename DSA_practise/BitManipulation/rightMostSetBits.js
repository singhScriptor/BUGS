function rightMostSetBits(num){
    if(num===0)return -1
    num=num.toString(2).padStart(32,'0')
    for(let i=num.length;i>0;i--){
        if(num[i]==='1')return num.length-i 
    }
    return -1
}
let n=18
console.log(rightMostSetBits(n))
