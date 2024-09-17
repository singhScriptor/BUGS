function getPermutation(str){
    let result=[]
    if(str.length===0)return ['']
    for(let i=0;i<str.length;i++){
        let char=str.slice(0,i)+str.slice(i+1)
        let perms=getPermutation(char)
        for(let j of perms){
            result.push(str[i]+j)
        }
    }
    return result
}
let str='abc'
let output=getPermutation(str)
for(let i=0;i<output.length;i++){
    console.log(output[i])
}