function hollowBox(n,s){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<s;j++){
            if(i===0 || i===n-1 || j===0 || j===s-1){
                str+='*'
            }
            else{
                str+='0'
            }
        }
        console.log(str)
    }
}
let n=4
let s=5
hollowBox(n,s)