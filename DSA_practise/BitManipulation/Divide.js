function divideTwoInt(a,b){
    let  divide=parseInt(a/b)
    if(divide>2147483647){
        return 2147483647
    }
    else if(divide<-2147483648){
        return -2147483648
    }
    else{
        return divide 
    }
}
let a=7,b=-3
console.log(divideTwoInt(a,b))