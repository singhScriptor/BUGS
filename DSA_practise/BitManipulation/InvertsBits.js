function invertBits(n){
    // n=n.toString(2).padStart(32,'0')
    // let ans=0
    // for(let i=0;i<n.length;i++){
    //     if(n[i]==='0'){
    //         ans+='1'
    //     }
    //     else{
    //         ans+='0'
    //     }
    // }
    // return parseInt(ans,2)

    //2nd method
    let ans=0xffffffff
    return (n^ans)>>>0

}
let n=1
console.log(invertBits(n))