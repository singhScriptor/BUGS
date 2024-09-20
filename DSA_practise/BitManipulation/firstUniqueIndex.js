function uniqueIndex(s){
    let char={}
    for(let i of s){
        if(char[i]){
            char[i]++
        }
        else{
            char[i]=1
        }
    }
    for(let i=0;i<s.length;i++){
        if(char[s[i]]===1){
            return i 
        }
    }
    return -1
}
let s="loveleetcode"
console.log(uniqueIndex(s))
