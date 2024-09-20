function maxOccuring(s){
    let maxi=0;char='',set={}
    for(let i of s){
        if(i in set)set[i]++
        else{
            set[i]=0
        }
        if(set[i]>maxi){
            maxi=set[i]
            char=i 
        }    
    }
    return char
}
let s="aabbcdee"
console.log(maxOccuring(s))