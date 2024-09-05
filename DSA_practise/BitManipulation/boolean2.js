function boolean(num){
    num=num.toString(2);
    for(let i=0;i<num.length;i++){
        if(num[i]!==num[num.length-1-i]){
            return false;
        }
    }
    return true;
}
let n=12
console.log(boolean(n));