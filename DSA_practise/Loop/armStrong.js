function armStrong(n){
    let temp=n
    let sum=0
    while(temp){
        let ans=temp%10
        sum+=ans**3
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
console.log(armStrong(n))