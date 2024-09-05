function firstRepeatedChar(n){
    let set={}
    for(let i of n){
        if(i in set){
            set[i]++
        }else{
            set[i] = 1
        }
    }
    for(let i of n){
        if(set[i]>1){
            return i
        }
    }
    return '#'
}
let n='sharpener'
console.log(firstRepeatedChar(n))