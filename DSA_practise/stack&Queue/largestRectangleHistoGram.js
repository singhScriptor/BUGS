function largestRectInHistoGram(height){
    height.push(0)
    let maxi=0
    let stack=[-1]
    for(let i=0;i<height.length;i++){
        while(height[i]<height[stack[stack.length-1]]){
            let left=height[stack.pop()]
            let right=i-stack[stack.length-1]-1
            maxi=Math.max(maxi,left*right)
        }
        stack.push(i)
    }
    stack.pop()
    return maxi



}
let height=[2,1,5,6,2,3]
console.log(largestRectInHistoGram(height))