function firstRepeatingChar(s){
    let char={}
    for(let i of s){
        if(char[i]){
            char[i]++
        }else{
            char[i]=1
        }
    }
    for(let i of s){
        if(char[i]>1){
            return i
        }
    }
    return '#'
}
let n="sharpener"
console.log(firstRepeatingChar(n))