function printPattern(n){
    for(let i=0;i<n;i++){
        let star=''
        for(let j=1;j<i+1;j++){
            star+=' '
        }
        for(let k=0;k<n-i;k++){
            star+='*'
        }
        console.log(star)
    }
}
let n=4
printPattern(n)