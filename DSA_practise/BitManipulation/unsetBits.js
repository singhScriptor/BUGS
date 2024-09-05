function unsetBits(num,k){
    num=num.toString(2)
    let ans=''
    for(let i=0;i<num.length;i++){
        if(i===num.length-1-k){
            ans+='0'
        }
        else{
            ans+=num[i]
        }
    }
    return parseInt(ans,2)
}
let num=13
let k=2
console.log(unsetBits(num,k))