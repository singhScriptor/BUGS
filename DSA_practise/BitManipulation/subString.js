function subString(A,B){
    if(A.length<B.length)return false
    for(let i=0;i<A.length-B.length;i++){
        let flag=true
        for(let j=0;j<B.length;j++){
            if(A[i+j]!==B[j]){
                flag=false 
                break
            }
        }
        if(flag){
            return true
        }    
    }
    return false
}
let A='abcd'
let B='ef'
console.log(subString(A,B))