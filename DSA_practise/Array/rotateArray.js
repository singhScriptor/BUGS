function rotatedArray(num,k){
    if(num.length===0){
        return num
    }   
    if(k===0)return num 
    k=k%num.length
    let rotated=num.slice(-k).concat(num.slice(0,num.length-k))
    for(let i=0;i<num.length;i++){
        num[i]=rotated[i]
    }
    return num

}
let num=[1,2,3,4,5,6,7]
let k=3
console.log(rotatedArray(num,k))
