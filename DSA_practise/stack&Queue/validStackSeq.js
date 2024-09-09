function validStackSeq(pushed,Popped){
    let stack=[]
    for(let i of pushed){
        stack.push(i)
        while(stack.length && stack[stack.length-1] === Popped[0]){
            stack.pop()
            Popped.shift()
        }
    }
    return stack.length===0
}
let pushed=[1,2,3,4,5]
let popped=[4,5,3,2,1]
console.log(validStackSeq(pushed,popped))