function reverseBits(n){
    let num=n.toString(2).padStart(32,'0')
    let rev=num.split('').reverse().join('')
    return parseInt(rev,2)

}
let n = '00000010100101000001111010011100'
console.log(reverseBits(n))