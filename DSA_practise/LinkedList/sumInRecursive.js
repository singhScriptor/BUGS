function recursiveSum(n){
    function sum(i){
        if(i>=10 ||i===n){
            return 0
        }
        return i+sum(i+2)
    }
    return sum(0)
}
let n=5
console.log(recursiveSum(n))
