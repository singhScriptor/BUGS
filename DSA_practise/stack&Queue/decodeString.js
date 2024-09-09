function decodeString(s){
    let str=''
    let num=0
    let stack=[]
    for(let i of s){
        if(!isNaN(i)){
            num=num*10+parseInt(i)
        }
        else if(i==='['){
            stack.push(str)
            stack.push(num)
            str=''
            num=0

        }
        else if(i===']'){
            let prevN=stack.pop()
            let prevStr=stack.pop()
            str=prevStr+str.repeat(prevN)
        }
        else{
            str+=i
        }
    }
    return str
}
let n='3[a]2[bc]'
console.log(decodeString(n))