function typesOfBurger(X,Y,N,R){
    for(let normal=0;normal<=N;normal++){
        let Premium=N-normal;
        if(normal*X + Premium*Y===R){
            return [normal,Premium]
        }
    }
    return [-1]
}
let x=2
let y=10
let n=4
let r=12
console.log(typesOfBurger(x,y,n,r))