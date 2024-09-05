function TypesOFburger(X,Y,N,R){
    for(let normal=0;normal<N;normal++){
        let premium=N-normal
        if(normal*X + premium*Y === R){
            return [normal,premium]
        }
    }
    return -1
}
const x=2
const y=10
const n=4
const r=12
console.log(TypesOFburger(x,y,n,r))