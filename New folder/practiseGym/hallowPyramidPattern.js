function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let k=0;k<n-i;k++){
            str+=' '
        }
        if(i===n-1){
            for(let l=0;l<2*n-1;l++){
                str+='*'
            }

        }
        else{
            str+='*'
            for(let m=0;m<2*i-1;m++){
                str+=' '
            }
            if(i>0){
                str+='*'
            }
        }
        console.log(str)
    }
}
let n=4
printPattern(n)