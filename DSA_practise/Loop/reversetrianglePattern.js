function reverseTriangle(n){
    let i=0
    while(i<=n){
        let str=''
        let j=n-i 
        while(j>0){
            str+='*'
            j--
        }
        
        console.log(str)
        i++
    }
}
let n=5
reverseTriangle(n)

function printPattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i;j++){
            str+='*'
        }
        console.log(str)
    }
}
let p=5
printPattern(n)