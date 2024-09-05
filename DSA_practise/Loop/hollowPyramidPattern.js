function hollowPyramid(n){
    for(let i=0;i<n;i++){
        let star=''
        for(let j=0;j<n-i-1;j++){
            star+=" "
        }
        if(i===n-1){
            for(let k=0;k<2*n-1;k++){
                star+='*'
            }
        }
        else{
            star+="*"
            for(let l=0;l<2*i-1;l++){
                star+=' '
            }
            if(i>0){
                star+="*"
            }
        }
        console.log(star)
    }
}
let n=5
hollowPyramid(n)