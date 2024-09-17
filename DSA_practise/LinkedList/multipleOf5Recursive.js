function multipleOf5(n){
    function multi(i){
        if(i>n) return 
        console.log(i)
        multi(i+5)
    }
    multi(0)
    
}
let n=30
multipleOf5(n)