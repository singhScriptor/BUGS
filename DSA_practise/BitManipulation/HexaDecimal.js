function hexaDecimal(num){
    if(num===0)return '0'
    if(num<0) num=0xFFFFFFFF+num+1
    let hex=num.toString(16)
    return hex
}
let num=26
console.log(hexaDecimal(num))