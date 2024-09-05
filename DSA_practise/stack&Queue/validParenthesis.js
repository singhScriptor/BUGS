function validParenthesis(s){
    let dict={'}':'{',']':'[',')':'('}
    let arr=[]
    for(let i of s){
        if(i in dict){
            if(arr.length===0 || arr.pop()!== dict[i]){
                return false
            }
            else{
                arr.push(i)
            }
        }
    }
    return arr.length === 0
}
let s='{}'
console.log(validParenthesis(s))
