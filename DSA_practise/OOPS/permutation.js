function permutation(a,b){
    if(a.length !== b.length )return false
    let c=a.split('').sort().join('')
    let d=b.split("").sort().join("")
    return c===d
}
let a="abc"
let b="bca"
console.log(permutation(a,b))