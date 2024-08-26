function ArmStrong(n){
    let num=n.toString()
    let temp=num
    let sum=0
    while(temp>0){
        let ans=temp%10
        sum+=Math.pow(ans,num.length)
        temp=Math.floor(temp/10)
    }
    if(n===sum){
        return true
    }
    else{
        return false
    }
}
let n=153
console.log(ArmStrong(n))