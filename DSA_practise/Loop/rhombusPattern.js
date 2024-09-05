function rhombusPattern(n){
    for(let i=0;i<n;i++){
        let star=''
        for(let j=0;j<n-i;j++){
            star+=' '
        }
        for(let k=0;k<n;k++){
            star+='*'
        }
        console.log(star)
    }
}
let n=4
rhombusPattern(n)