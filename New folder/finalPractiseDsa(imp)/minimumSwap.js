function minimumSwap(str,k){
    let mini=Infinity
    for(let i=0;i<str.length-k;i++){
        let count=0
        for(let j=i;j<i+k;j++){
            if(str[j]==='W'){
                count++
            }
        }
        mini=Math.min(mini,count)
    }
    return mini
}
let str='BWBBW'
let k=3 
console.log(minimumSwap(str,k))