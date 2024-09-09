function nonRepeatStreamCHar(A){
    let stack=[]
    let char=new Set()
    let ans=''
    for(let i of A){
        if(!char.has(i)){
            stack.push(i)
            char.add(i)
        }
        else{
            if(stack.includes(i)){
                stack.splice(stack.indexOf(i),1)
            }
        }
        if(stack.length===0){
            ans+='#'
        }
        else{
            ans+=stack[0]
        }

    }
    return ans
}
let A="abadbc"
console.log(nonRepeatStreamCHar(A))